/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface GatewayEVMUpgradeTestInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "ASSET_HANDLER_ROLE"
      | "DEFAULT_ADMIN_ROLE"
      | "PAUSER_ROLE"
      | "TSS_ROLE"
      | "UPGRADE_INTERFACE_VERSION"
      | "call"
      | "custody"
      | "deposit(address)"
      | "deposit(address,uint256,address)"
      | "depositAndCall(address,bytes)"
      | "depositAndCall(address,uint256,address,bytes)"
      | "execute"
      | "executeRevert"
      | "executeWithERC20"
      | "getRoleAdmin"
      | "grantRole"
      | "hasRole"
      | "initialize"
      | "pause"
      | "paused"
      | "proxiableUUID"
      | "renounceRole"
      | "revertWithERC20"
      | "revokeRole"
      | "setConnector"
      | "setCustody"
      | "supportsInterface"
      | "tssAddress"
      | "unpause"
      | "upgradeToAndCall"
      | "zetaConnector"
      | "zetaToken"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "Call"
      | "Deposit"
      | "Executed"
      | "ExecutedV2"
      | "ExecutedWithERC20"
      | "Initialized"
      | "Paused"
      | "Reverted"
      | "RevertedWithERC20"
      | "RoleAdminChanged"
      | "RoleGranted"
      | "RoleRevoked"
      | "Unpaused"
      | "Upgraded"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "ASSET_HANDLER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "PAUSER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "TSS_ROLE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "UPGRADE_INTERFACE_VERSION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "call",
    values: [AddressLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "custody", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "deposit(address)",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit(address,uint256,address)",
    values: [AddressLike, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "depositAndCall(address,bytes)",
    values: [AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "depositAndCall(address,uint256,address,bytes)",
    values: [AddressLike, BigNumberish, AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "execute",
    values: [AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "executeRevert",
    values: [AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "executeWithERC20",
    values: [AddressLike, AddressLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proxiableUUID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "revertWithERC20",
    values: [AddressLike, AddressLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setConnector",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setCustody",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "tssAddress",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "zetaConnector",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "zetaToken", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "ASSET_HANDLER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PAUSER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "TSS_ROLE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "UPGRADE_INTERFACE_VERSION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "call", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "custody", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "deposit(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deposit(address,uint256,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositAndCall(address,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositAndCall(address,uint256,address,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeRevert",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeWithERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proxiableUUID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revertWithERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setConnector",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setCustody", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tssAddress", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "zetaConnector",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "zetaToken", data: BytesLike): Result;
}

export namespace CallEvent {
  export type InputTuple = [
    sender: AddressLike,
    receiver: AddressLike,
    payload: BytesLike
  ];
  export type OutputTuple = [sender: string, receiver: string, payload: string];
  export interface OutputObject {
    sender: string;
    receiver: string;
    payload: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DepositEvent {
  export type InputTuple = [
    sender: AddressLike,
    receiver: AddressLike,
    amount: BigNumberish,
    asset: AddressLike,
    payload: BytesLike
  ];
  export type OutputTuple = [
    sender: string,
    receiver: string,
    amount: bigint,
    asset: string,
    payload: string
  ];
  export interface OutputObject {
    sender: string;
    receiver: string;
    amount: bigint;
    asset: string;
    payload: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ExecutedEvent {
  export type InputTuple = [
    destination: AddressLike,
    value: BigNumberish,
    data: BytesLike
  ];
  export type OutputTuple = [destination: string, value: bigint, data: string];
  export interface OutputObject {
    destination: string;
    value: bigint;
    data: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ExecutedV2Event {
  export type InputTuple = [
    destination: AddressLike,
    value: BigNumberish,
    data: BytesLike
  ];
  export type OutputTuple = [destination: string, value: bigint, data: string];
  export interface OutputObject {
    destination: string;
    value: bigint;
    data: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ExecutedWithERC20Event {
  export type InputTuple = [
    token: AddressLike,
    to: AddressLike,
    amount: BigNumberish,
    data: BytesLike
  ];
  export type OutputTuple = [
    token: string,
    to: string,
    amount: bigint,
    data: string
  ];
  export interface OutputObject {
    token: string;
    to: string;
    amount: bigint;
    data: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace InitializedEvent {
  export type InputTuple = [version: BigNumberish];
  export type OutputTuple = [version: bigint];
  export interface OutputObject {
    version: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PausedEvent {
  export type InputTuple = [account: AddressLike];
  export type OutputTuple = [account: string];
  export interface OutputObject {
    account: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RevertedEvent {
  export type InputTuple = [
    destination: AddressLike,
    value: BigNumberish,
    data: BytesLike
  ];
  export type OutputTuple = [destination: string, value: bigint, data: string];
  export interface OutputObject {
    destination: string;
    value: bigint;
    data: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RevertedWithERC20Event {
  export type InputTuple = [
    token: AddressLike,
    to: AddressLike,
    amount: BigNumberish,
    data: BytesLike
  ];
  export type OutputTuple = [
    token: string,
    to: string,
    amount: bigint,
    data: string
  ];
  export interface OutputObject {
    token: string;
    to: string;
    amount: bigint;
    data: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleAdminChangedEvent {
  export type InputTuple = [
    role: BytesLike,
    previousAdminRole: BytesLike,
    newAdminRole: BytesLike
  ];
  export type OutputTuple = [
    role: string,
    previousAdminRole: string,
    newAdminRole: string
  ];
  export interface OutputObject {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleGrantedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleRevokedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UnpausedEvent {
  export type InputTuple = [account: AddressLike];
  export type OutputTuple = [account: string];
  export interface OutputObject {
    account: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UpgradedEvent {
  export type InputTuple = [implementation: AddressLike];
  export type OutputTuple = [implementation: string];
  export interface OutputObject {
    implementation: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface GatewayEVMUpgradeTest extends BaseContract {
  connect(runner?: ContractRunner | null): GatewayEVMUpgradeTest;
  waitForDeployment(): Promise<this>;

  interface: GatewayEVMUpgradeTestInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  ASSET_HANDLER_ROLE: TypedContractMethod<[], [string], "view">;

  DEFAULT_ADMIN_ROLE: TypedContractMethod<[], [string], "view">;

  PAUSER_ROLE: TypedContractMethod<[], [string], "view">;

  TSS_ROLE: TypedContractMethod<[], [string], "view">;

  UPGRADE_INTERFACE_VERSION: TypedContractMethod<[], [string], "view">;

  call: TypedContractMethod<
    [receiver: AddressLike, payload: BytesLike],
    [void],
    "nonpayable"
  >;

  custody: TypedContractMethod<[], [string], "view">;

  "deposit(address)": TypedContractMethod<
    [receiver: AddressLike],
    [void],
    "payable"
  >;

  "deposit(address,uint256,address)": TypedContractMethod<
    [receiver: AddressLike, amount: BigNumberish, asset: AddressLike],
    [void],
    "nonpayable"
  >;

  "depositAndCall(address,bytes)": TypedContractMethod<
    [receiver: AddressLike, payload: BytesLike],
    [void],
    "payable"
  >;

  "depositAndCall(address,uint256,address,bytes)": TypedContractMethod<
    [
      receiver: AddressLike,
      amount: BigNumberish,
      asset: AddressLike,
      payload: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  execute: TypedContractMethod<
    [destination: AddressLike, data: BytesLike],
    [string],
    "payable"
  >;

  executeRevert: TypedContractMethod<
    [destination: AddressLike, data: BytesLike],
    [void],
    "payable"
  >;

  executeWithERC20: TypedContractMethod<
    [
      token: AddressLike,
      to: AddressLike,
      amount: BigNumberish,
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  getRoleAdmin: TypedContractMethod<[role: BytesLike], [string], "view">;

  grantRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  hasRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;

  initialize: TypedContractMethod<
    [_tssAddress: AddressLike, _zetaToken: AddressLike, _admin: AddressLike],
    [void],
    "nonpayable"
  >;

  pause: TypedContractMethod<[], [void], "nonpayable">;

  paused: TypedContractMethod<[], [boolean], "view">;

  proxiableUUID: TypedContractMethod<[], [string], "view">;

  renounceRole: TypedContractMethod<
    [role: BytesLike, callerConfirmation: AddressLike],
    [void],
    "nonpayable"
  >;

  revertWithERC20: TypedContractMethod<
    [
      token: AddressLike,
      to: AddressLike,
      amount: BigNumberish,
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  revokeRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  setConnector: TypedContractMethod<
    [_zetaConnector: AddressLike],
    [void],
    "nonpayable"
  >;

  setCustody: TypedContractMethod<
    [_custody: AddressLike],
    [void],
    "nonpayable"
  >;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  tssAddress: TypedContractMethod<[], [string], "view">;

  unpause: TypedContractMethod<[], [void], "nonpayable">;

  upgradeToAndCall: TypedContractMethod<
    [newImplementation: AddressLike, data: BytesLike],
    [void],
    "payable"
  >;

  zetaConnector: TypedContractMethod<[], [string], "view">;

  zetaToken: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "ASSET_HANDLER_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "DEFAULT_ADMIN_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "PAUSER_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "TSS_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "UPGRADE_INTERFACE_VERSION"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "call"
  ): TypedContractMethod<
    [receiver: AddressLike, payload: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "custody"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "deposit(address)"
  ): TypedContractMethod<[receiver: AddressLike], [void], "payable">;
  getFunction(
    nameOrSignature: "deposit(address,uint256,address)"
  ): TypedContractMethod<
    [receiver: AddressLike, amount: BigNumberish, asset: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "depositAndCall(address,bytes)"
  ): TypedContractMethod<
    [receiver: AddressLike, payload: BytesLike],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "depositAndCall(address,uint256,address,bytes)"
  ): TypedContractMethod<
    [
      receiver: AddressLike,
      amount: BigNumberish,
      asset: AddressLike,
      payload: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "execute"
  ): TypedContractMethod<
    [destination: AddressLike, data: BytesLike],
    [string],
    "payable"
  >;
  getFunction(
    nameOrSignature: "executeRevert"
  ): TypedContractMethod<
    [destination: AddressLike, data: BytesLike],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "executeWithERC20"
  ): TypedContractMethod<
    [
      token: AddressLike,
      to: AddressLike,
      amount: BigNumberish,
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getRoleAdmin"
  ): TypedContractMethod<[role: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "grantRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "hasRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [_tssAddress: AddressLike, _zetaToken: AddressLike, _admin: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "pause"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "paused"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "proxiableUUID"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "renounceRole"
  ): TypedContractMethod<
    [role: BytesLike, callerConfirmation: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "revertWithERC20"
  ): TypedContractMethod<
    [
      token: AddressLike,
      to: AddressLike,
      amount: BigNumberish,
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "revokeRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setConnector"
  ): TypedContractMethod<[_zetaConnector: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setCustody"
  ): TypedContractMethod<[_custody: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "tssAddress"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "unpause"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "upgradeToAndCall"
  ): TypedContractMethod<
    [newImplementation: AddressLike, data: BytesLike],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "zetaConnector"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "zetaToken"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "Call"
  ): TypedContractEvent<
    CallEvent.InputTuple,
    CallEvent.OutputTuple,
    CallEvent.OutputObject
  >;
  getEvent(
    key: "Deposit"
  ): TypedContractEvent<
    DepositEvent.InputTuple,
    DepositEvent.OutputTuple,
    DepositEvent.OutputObject
  >;
  getEvent(
    key: "Executed"
  ): TypedContractEvent<
    ExecutedEvent.InputTuple,
    ExecutedEvent.OutputTuple,
    ExecutedEvent.OutputObject
  >;
  getEvent(
    key: "ExecutedV2"
  ): TypedContractEvent<
    ExecutedV2Event.InputTuple,
    ExecutedV2Event.OutputTuple,
    ExecutedV2Event.OutputObject
  >;
  getEvent(
    key: "ExecutedWithERC20"
  ): TypedContractEvent<
    ExecutedWithERC20Event.InputTuple,
    ExecutedWithERC20Event.OutputTuple,
    ExecutedWithERC20Event.OutputObject
  >;
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "Paused"
  ): TypedContractEvent<
    PausedEvent.InputTuple,
    PausedEvent.OutputTuple,
    PausedEvent.OutputObject
  >;
  getEvent(
    key: "Reverted"
  ): TypedContractEvent<
    RevertedEvent.InputTuple,
    RevertedEvent.OutputTuple,
    RevertedEvent.OutputObject
  >;
  getEvent(
    key: "RevertedWithERC20"
  ): TypedContractEvent<
    RevertedWithERC20Event.InputTuple,
    RevertedWithERC20Event.OutputTuple,
    RevertedWithERC20Event.OutputObject
  >;
  getEvent(
    key: "RoleAdminChanged"
  ): TypedContractEvent<
    RoleAdminChangedEvent.InputTuple,
    RoleAdminChangedEvent.OutputTuple,
    RoleAdminChangedEvent.OutputObject
  >;
  getEvent(
    key: "RoleGranted"
  ): TypedContractEvent<
    RoleGrantedEvent.InputTuple,
    RoleGrantedEvent.OutputTuple,
    RoleGrantedEvent.OutputObject
  >;
  getEvent(
    key: "RoleRevoked"
  ): TypedContractEvent<
    RoleRevokedEvent.InputTuple,
    RoleRevokedEvent.OutputTuple,
    RoleRevokedEvent.OutputObject
  >;
  getEvent(
    key: "Unpaused"
  ): TypedContractEvent<
    UnpausedEvent.InputTuple,
    UnpausedEvent.OutputTuple,
    UnpausedEvent.OutputObject
  >;
  getEvent(
    key: "Upgraded"
  ): TypedContractEvent<
    UpgradedEvent.InputTuple,
    UpgradedEvent.OutputTuple,
    UpgradedEvent.OutputObject
  >;

  filters: {
    "Call(address,address,bytes)": TypedContractEvent<
      CallEvent.InputTuple,
      CallEvent.OutputTuple,
      CallEvent.OutputObject
    >;
    Call: TypedContractEvent<
      CallEvent.InputTuple,
      CallEvent.OutputTuple,
      CallEvent.OutputObject
    >;

    "Deposit(address,address,uint256,address,bytes)": TypedContractEvent<
      DepositEvent.InputTuple,
      DepositEvent.OutputTuple,
      DepositEvent.OutputObject
    >;
    Deposit: TypedContractEvent<
      DepositEvent.InputTuple,
      DepositEvent.OutputTuple,
      DepositEvent.OutputObject
    >;

    "Executed(address,uint256,bytes)": TypedContractEvent<
      ExecutedEvent.InputTuple,
      ExecutedEvent.OutputTuple,
      ExecutedEvent.OutputObject
    >;
    Executed: TypedContractEvent<
      ExecutedEvent.InputTuple,
      ExecutedEvent.OutputTuple,
      ExecutedEvent.OutputObject
    >;

    "ExecutedV2(address,uint256,bytes)": TypedContractEvent<
      ExecutedV2Event.InputTuple,
      ExecutedV2Event.OutputTuple,
      ExecutedV2Event.OutputObject
    >;
    ExecutedV2: TypedContractEvent<
      ExecutedV2Event.InputTuple,
      ExecutedV2Event.OutputTuple,
      ExecutedV2Event.OutputObject
    >;

    "ExecutedWithERC20(address,address,uint256,bytes)": TypedContractEvent<
      ExecutedWithERC20Event.InputTuple,
      ExecutedWithERC20Event.OutputTuple,
      ExecutedWithERC20Event.OutputObject
    >;
    ExecutedWithERC20: TypedContractEvent<
      ExecutedWithERC20Event.InputTuple,
      ExecutedWithERC20Event.OutputTuple,
      ExecutedWithERC20Event.OutputObject
    >;

    "Initialized(uint64)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;

    "Paused(address)": TypedContractEvent<
      PausedEvent.InputTuple,
      PausedEvent.OutputTuple,
      PausedEvent.OutputObject
    >;
    Paused: TypedContractEvent<
      PausedEvent.InputTuple,
      PausedEvent.OutputTuple,
      PausedEvent.OutputObject
    >;

    "Reverted(address,uint256,bytes)": TypedContractEvent<
      RevertedEvent.InputTuple,
      RevertedEvent.OutputTuple,
      RevertedEvent.OutputObject
    >;
    Reverted: TypedContractEvent<
      RevertedEvent.InputTuple,
      RevertedEvent.OutputTuple,
      RevertedEvent.OutputObject
    >;

    "RevertedWithERC20(address,address,uint256,bytes)": TypedContractEvent<
      RevertedWithERC20Event.InputTuple,
      RevertedWithERC20Event.OutputTuple,
      RevertedWithERC20Event.OutputObject
    >;
    RevertedWithERC20: TypedContractEvent<
      RevertedWithERC20Event.InputTuple,
      RevertedWithERC20Event.OutputTuple,
      RevertedWithERC20Event.OutputObject
    >;

    "RoleAdminChanged(bytes32,bytes32,bytes32)": TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;
    RoleAdminChanged: TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;

    "RoleGranted(bytes32,address,address)": TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;
    RoleGranted: TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;

    "RoleRevoked(bytes32,address,address)": TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;
    RoleRevoked: TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;

    "Unpaused(address)": TypedContractEvent<
      UnpausedEvent.InputTuple,
      UnpausedEvent.OutputTuple,
      UnpausedEvent.OutputObject
    >;
    Unpaused: TypedContractEvent<
      UnpausedEvent.InputTuple,
      UnpausedEvent.OutputTuple,
      UnpausedEvent.OutputObject
    >;

    "Upgraded(address)": TypedContractEvent<
      UpgradedEvent.InputTuple,
      UpgradedEvent.OutputTuple,
      UpgradedEvent.OutputObject
    >;
    Upgraded: TypedContractEvent<
      UpgradedEvent.InputTuple,
      UpgradedEvent.OutputTuple,
      UpgradedEvent.OutputObject
    >;
  };
}
