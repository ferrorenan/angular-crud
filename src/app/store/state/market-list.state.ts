import {
  Action,
  Selector,
  State,
  StateContext,
} from '@ngxs/store';
import { Injectable } from '@angular/core';
import { MarketListActions } from '../actions/market-list.actions';
import { delay } from 'rxjs';
import { Card } from '../../models/card';
import { MarketService } from '../../services/market.service';

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
      private _marketListService: MarketService
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
}