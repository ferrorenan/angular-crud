import {
  Action,
  Selector,
  State,
  StateContext,
} from '@ngxs/store';
import { Injectable } from '@angular/core';
import {
  MarketListActions,
} from '../actions/market-list.actions';
import { delay } from 'rxjs';
import { Card } from '../../models/card';
import { MarketService } from '../../services/market.service';
import { AlertService } from '../../services/alert.service';
import DeleteItemFromMarketList = MarketListActions.DeleteItemFromMarketList;
import InsertItemFromMarketList = MarketListActions.InsertItemFromMarketList;
import UpdateItemFromMarketList = MarketListActions.UpdateItemFromMarketList;

export interface MarketListStateModel {
  items: Card[];
  isLoading: boolean,
  hasError: boolean,
}

const defaultState: MarketListStateModel = {
  items: [],
  isLoading: true,
  hasError: false,
}

@State<MarketListStateModel>({
  name: 'MarketListState',
  defaults: defaultState
})

@Injectable()
export class MarketListStates {

  constructor(
      private _marketListService: MarketService,
      private _alertService: AlertService,
  ) {}

  @Selector()
  static hasError(state: MarketListStateModel): boolean {
    return state.hasError;
  }

  @Selector()
  static isLoading(state: MarketListStateModel): boolean {
    return state.isLoading;
  }

  @Selector()
  static getMarketList(state: MarketListStateModel): Card[] {
    return state.items;
  }

  @Action(MarketListActions.GetMarketList)
  getMarketList(ctx: StateContext<MarketListStateModel>){
    return this._marketListService
        .getMovies()
        .pipe(
            delay(1000),
        )
        .subscribe({
          next: ((marketList: Card[]) => {
            ctx.patchState({
              items: marketList,
              hasError: false,
              isLoading: false,
            });
            ctx.dispatch(new MarketListActions.GetMarketListSuccess());
          }),
          error: ((error) => {
            ctx.patchState({
              hasError: true,
              isLoading: false
            });
            ctx.dispatch(new MarketListActions.GetMarketListError());
          }),
        });
  }

  @Action(MarketListActions.InsertItemFromMarketList)
  insertItemMarketList(ctx: StateContext<any>, { itemToInsert }: InsertItemFromMarketList) {
    this._marketListService
        .insertMovies(itemToInsert)
        .subscribe({
          error: (() => {
            ctx.dispatch(new MarketListActions.InsertItemFromMarketListError());
            this._alertService
                .showFeedbackClient(
                    'OooOuuhH!',
                    'Something happened and we had a error!',
                    'error',
                );
          }),
          complete: (() => {
            this._alertService
                .showFeedbackClient(
                    'New item added!',
                    'Your new item was added in your market list!',
                    'success',
                );
            ctx.dispatch(new MarketListActions.InsertItemFromMarketListSuccess());
            ctx.dispatch(new MarketListActions.GetMarketList());
          })
        });
  }

  @Action(MarketListActions.UpdateItemFromMarketList)
  updateItemFromMarketList(ctx: StateContext<boolean>, { itemToUpdate}: UpdateItemFromMarketList) {
    this._marketListService
        .editProductData(itemToUpdate)
        .subscribe({
          error: (() => {
            ctx.dispatch(new MarketListActions.UpdateItemFromMarketListError());
            this._alertService
                .showErrorFeedbackClient();
          }),
          complete: (() => {
            this._alertService
                .showFeedbackClient(
                    'Product Updated!',
                    `Your procut: ${itemToUpdate.name} was updated with the new informations!`,
                    'success',
                );
            ctx.dispatch(new MarketListActions.UpdateItemFromMarketListSuccess());
            ctx.dispatch(new MarketListActions.GetMarketList());
          })
        });
  }

  @Action(MarketListActions.DeleteItemFromMarketList)
  deleteItemFromMarketList(ctx: StateContext<boolean>,  { itemToDelete }: DeleteItemFromMarketList) {
    this._marketListService
        .removeItemFromList(itemToDelete)
        .subscribe({
          error: (() => {
            ctx.dispatch(new MarketListActions.DeleteItemFromMarketListError());
            this._alertService
                .showErrorFeedbackClient();
          }),
          complete: (() => {
            ctx.dispatch(new MarketListActions.DeleteItemFromMarketListSuccess());
            this._alertService
                .showFeedbackClient(
                    'Yeah, done!',
                    `The ${itemToDelete} was deleted from your market list!`,
                    'success',
                );
            ctx.dispatch(new MarketListActions.GetMarketList);
          })
        });
  }
}