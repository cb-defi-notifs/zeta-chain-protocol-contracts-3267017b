/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type { Abortable, AbortableInterface } from "../../Revert.sol/Abortable";

const _abi = [
  {
    type: "function",
    name: "onAbort",
    inputs: [
      {
        name: "abortContext",
        type: "tuple",
        internalType: "struct AbortContext",
        components: [
          {
            name: "sender",
            type: "bytes",
            internalType: "bytes",
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
            name: "outgoing",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "chainID",
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
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const;

export class Abortable__factory {
  static readonly abi = _abi;
  static createInterface(): AbortableInterface {
    return new Interface(_abi) as AbortableInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Abortable {
    return new Contract(address, _abi, runner) as unknown as Abortable;
  }
}