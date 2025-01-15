/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type { ERC165, ERC165Interface } from "../ERC165";

const _abi = [
  {
    type: "function",
    name: "supportsInterface",
    inputs: [
      {
        name: "interfaceId",
        type: "bytes4",
        internalType: "bytes4",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
] as const;

export class ERC165__factory {
  static readonly abi = _abi;
  static createInterface(): ERC165Interface {
    return new Interface(_abi) as ERC165Interface;
  }
  static connect(address: string, runner?: ContractRunner | null): ERC165 {
    return new Contract(address, _abi, runner) as unknown as ERC165;
  }
}