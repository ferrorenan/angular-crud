export namespace MarketListActions {

  export class GetMarketList {
    static readonly type = '[MarketList] Get Market List'
  }

  export class GetMarketListSuccess {
    static readonly type = '[MarketList] Get Market List Success'
  }

  export class GetMarketListError {
    static readonly type = '[MarketList] Get Market List Error'
  }

  export class DeleteItemFromMarketList {
    static readonly type = '[MarketList] Delete Item Market List';

    constructor(public readonly itemToDelete: string) {}
  }

  export class DeleteItemFromMarketListSuccess {
    static readonly type = '[MarketList] Delete Item Market List Success';
  }

  export class DeleteItemFromMarketListError {
    static readonly type = '[MarketList] Delete Item Market List Error';
  }
}