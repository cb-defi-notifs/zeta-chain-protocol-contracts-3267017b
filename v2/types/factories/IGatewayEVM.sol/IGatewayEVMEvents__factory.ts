/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IGatewayEVMEvents,
  IGatewayEVMEventsInterface,
} from "../../IGatewayEVM.sol/IGatewayEVMEvents";

const _abi = [
  {
    type: "event",
    name: "Called",
    inputs: [
      {
        name: "sender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "receiver",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "payload",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
      {
        name: "revertOptions",
        type: "tuple",
        indexed: false,
        internalType: "struct RevertOptions",
        components: [
          {
            name: "revertAddress",
            type: "address",
            internalType: "address",
          },
          {
            name: "callOnRevert",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "abortAddress",
            type: "address",
            internalType: "address",
          },
          {
            name: "revertMessage",
            type: "bytes",
            internalType: "bytes",
          },
          {
            name: "onRevertGasLimit",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Deposited",
    inputs: [
      {
        name: "sender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "receiver",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "asset",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "payload",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
      {
        name: "revertOptions",
        type: "tuple",
        indexed: false,
        internalType: "struct RevertOptions",
        components: [
          {
            name: "revertAddress",
            type: "address",
            internalType: "address",
          },
          {
            name: "callOnRevert",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "abortAddress",
            type: "address",
            internalType: "address",
          },
          {
            name: "revertMessage",
            type: "bytes",
            internalType: "bytes",
          },
          {
            name: "onRevertGasLimit",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Executed",
    inputs: [
      {
        name: "destination",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "data",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ExecutedWithERC20",
    inputs: [
      {
        name: "token",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "to",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "data",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Reverted",
    inputs: [
      {
        name: "to",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "token",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "data",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
      {
        name: "revertContext",
        type: "tuple",
        indexed: false,
        internalType: "struct RevertContext",
        components: [
          {
            name: "sender",
            type: "address",
            internalType: "address",
          },
          {
            name: "asset",
            type: "address",
            internalType: "address",
          },
          {
            name: "amount",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "revertMessage",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "UpdatedGatewayTSSAddress",
    inputs: [
      {
        name: "oldTSSAddress",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "newTSSAddress",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
] as const;

export class IGatewayEVMEvents__factory {
  static readonly abi = _abi;
  static createInterface(): IGatewayEVMEventsInterface {
    return new Interface(_abi) as IGatewayEVMEventsInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IGatewayEVMEvents {
    return new Contract(address, _abi, runner) as unknown as IGatewayEVMEvents;
  }
}
