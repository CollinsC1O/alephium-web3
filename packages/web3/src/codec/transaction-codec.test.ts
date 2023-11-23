/*
Copyright 2018 - 2022 The Alephium Authors
This file is part of the alephium project.

The library is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

The library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with the library. If not, see <http://www.gnu.org/licenses/>.
*/

import { UnsignedTransactionCodec } from '.'
import { compactSignedIntCodec } from './compact-int-codec'
import { TransactionCodec, transactionCodec } from './transaction-codec'

describe('Encode & decode transactions', function () {
  it('should encode and decode coinbase transactions', () => {
    const txId = 'c1b316227dd32b666d03e12d4fefa3726e590fb482c38adbc5394e8bce33fd0a'
    const encoded =
      '00000080004e20bb9aca000001c422b1c8c1227a0000001676f69331afd08536b2878b639f56c268871863817e7a774d8745614d9e28230000018bdfafc0eb000a00020000018bdde5fd6b0100000000'
    const decoded = transactionCodec.decode(Buffer.from(encoded, 'hex'))
    const tx = TransactionCodec.convertToTx(decoded, txId)
    const unsignedTx = tx.unsigned
    expect(unsignedTx.inputs).toEqual([])
    expect(unsignedTx.gasAmount).toEqual(20000)
    expect(unsignedTx.gasPrice).toEqual('1000000000')
    expect(unsignedTx.scriptOpt).toBeUndefined()
    expect(unsignedTx.fixedOutputs).toEqual([
      {
        hint: -140898739,
        key: 'a739ddff0dc02d9b49623a70baf4392b25478ddcc463b7873fbb7d54ec253e9e',
        attoAlphAmount: '2500000000000000000',
        address: '12WhBVry3PXzTyCm389eSZMVsDSQZjGh5csv6CPrNfgtz',
        tokens: [],
        lockTime: 1700264919275,
        message: '00020000018bdde5fd6b'
      }
    ])
    expect(tx.inputSignatures).toEqual([])
    expect(tx.generatedOutputs).toEqual([])
    expect(tx.scriptSignatures).toEqual([])
    expect(tx.scriptExecutionOk).toEqual(true)
    expect(encoded).toEqual(transactionCodec.encode(decoded).toString('hex'))
  })

  it('should encode and decode a normal transfer transaction', () => {
    const txId = 'c8addc7a19a25e8f4ad5bd988680c5575457368e3ea4d857d70d2435146366c9'
    const encoded =
      '0000008000585cc1174876e80002b92f810be64911de68098dec60272b9724def39fddd10dbe25c6d43da6f0aa598f8bfdbe00030871c7f3b39a4424bcf78002973a5f26620c2d56967e72f0b27964c339bfff58b92f810bdc056a644fa173aeaefeedac3d988fa7545ac0fbcaae0566e9b5c146848d8cd600030871c7f3b39a4424bcf78002973a5f26620c2d56967e72f0b27964c339bfff5803c3038d7ea4c6800000c984ff65f9d30be832bd9d746a434b79ef2a37b2f5dcffea492c0903a81d695e000000000000000001b2d71c116408ae47b931482a440f675dc9ea64453db24ee931dacd578cae90020200c3038d7ea4c6800000efb60170f8e16e32e1b01724a0cdc0fb7a4e233edf54556ea88a441619adbed4000000000000000001b2d71c116408ae47b931482a440f675dc9ea64453db24ee931dacd578cae9002405c00c5011582af43848e200000efb60170f8e16e32e1b01724a0cdc0fb7a4e233edf54556ea88a441619adbed4000000000000000000000100000159b219a49a6ae7e246be193d2b2d7c1ab986fb93830150d559d14de24e2969b163ccb63d56e22973d65fb1c27ab1ed6d611f337a2d82c7aa4fdaec2a8efd027a00'
    const decoded = transactionCodec.decode(Buffer.from(encoded, 'hex'))
    const tx = TransactionCodec.convertToTx(decoded, txId)
    const unsignedTx = tx.unsigned
    expect(unsignedTx.inputs).toEqual([
      {
        outputRef: { hint: -1188069109, key: 'e64911de68098dec60272b9724def39fddd10dbe25c6d43da6f0aa598f8bfdbe' },
        unlockScript: '00030871c7f3b39a4424bcf78002973a5f26620c2d56967e72f0b27964c339bfff58'
      },
      {
        outputRef: {
          hint: -1188069109,
          key: 'dc056a644fa173aeaefeedac3d988fa7545ac0fbcaae0566e9b5c146848d8cd6'
        },
        unlockScript: '00030871c7f3b39a4424bcf78002973a5f26620c2d56967e72f0b27964c339bfff58'
      }
    ])
    expect(unsignedTx.gasAmount).toEqual(22620)
    expect(unsignedTx.gasPrice).toEqual('100000000000')
    expect(unsignedTx.scriptOpt).toBeUndefined()
    expect(unsignedTx.fixedOutputs).toEqual([
      {
        hint: -1578566257,
        key: 'dda5408fb70d885622915c9dc953ab06d629dbbcc008fbcfe32a2d6a64430f17',
        attoAlphAmount: '1000000000000000',
        address: '1EZea7zsGoh5wwDo1Dfsb7wEXwvhbcYf9rb3ZY5zbErAh',
        tokens: [
          {
            id: 'b2d71c116408ae47b931482a440f675dc9ea64453db24ee931dacd578cae9002',
            amount: '2'
          }
        ],
        lockTime: 0,
        message: ''
      },
      {
        hint: -1188069109,
        key: '56f8073906894cf1917dfaf972d98d8be6891bf4786a621049ad52c845dba00c',
        attoAlphAmount: '1000000000000000',
        address: '1H8jQaMZDnGjU3mZTRmEtYXh7ex6qaBqeQnk6tpicUvcj',
        tokens: [
          {
            id: 'b2d71c116408ae47b931482a440f675dc9ea64453db24ee931dacd578cae9002',
            amount: '92'
          }
        ],
        lockTime: 0,
        message: ''
      },
      {
        hint: -1188069109,
        key: 'c664dfa9855bab63399a762cf99e768d96c98b8f3f24abf0eb79dc39568a80f0',
        attoAlphAmount: '19996738000000000000',
        address: '1H8jQaMZDnGjU3mZTRmEtYXh7ex6qaBqeQnk6tpicUvcj',
        tokens: [],
        lockTime: 0,
        message: ''
      }
    ])

    expect(tx.inputSignatures).toEqual([
      '59b219a49a6ae7e246be193d2b2d7c1ab986fb93830150d559d14de24e2969b163ccb63d56e22973d65fb1c27ab1ed6d611f337a2d82c7aa4fdaec2a8efd027a'
    ])
    expect(tx.generatedOutputs).toEqual([])
    expect(tx.scriptSignatures).toEqual([])
    expect(tx.scriptExecutionOk).toEqual(true)
    expect(encoded).toEqual(transactionCodec.encode(decoded).toString('hex'))
  })

  it('should encode and decode transaction with txscript', () => {
    const txId = '8bb784ef69bca0246dcf2bc465dc09693b86d72ed68167011626afb73583498e'
    const encoded =
      '0000010101030001000e0c0d1440205bf2f559ae714dab83ff36bed4d9e634dfda3ca9ed755d60f00be89e2a20bd0001131700b4160013c40de0b6b3a7640000a313c40de0b6b3a76400000d0c1440205bf2f559ae714dab83ff36bed4d9e634dfda3ca9ed755d60f00be89e2a20bd00010d8000d935c1174876e80004162de2c13e1ad7c84e697cc65c97a4a5161515ed7dcf91630ab73f49fa2145e9e606f6ab00034e30eb5dd78000bcbe276e1202d0dc5499398321cc160cc8b10f2a71ffdfe7ca162de2c189995088e0355cb2771d63e76a3b9d7f7cac5f1301e29194b6f8dad5d22916b900034e30eb5dd78000bcbe276e1202d0dc5499398321cc160cc8b10f2a71ffdfe7ca162de2c1e9411abed460ec64a3ef04c44351de07135f951a6ea72fe6281d72c0e394922c00034e30eb5dd78000bcbe276e1202d0dc5499398321cc160cc8b10f2a71ffdfe7ca162de2c1cb32af059f198eb97a987ef0401c60a72b3bde65f2eba6db4206cf020859cdf400034e30eb5dd78000bcbe276e1202d0dc5499398321cc160cc8b10f2a71ffdfe7ca02c3038d7ea4c680000017620f4cdd77b8e469a5ec08a6744c6334410684a9ee91835ac27ae27f3be3ae0000000000000000011a281053ba8601a658368594da034c2e99a0fb951b86498d05e76aedfe666800c4080e49bae139a68600c507f9f8dfaa1c0e11350017620f4cdd77b8e469a5ec08a6744c6334410684a9ee91835ac27ae27f3be3ae000000000000000000000101261dc7384d0c7ac9b94e6f7a9d6f1dc169dedcf91ac5562193430a96345a84cdc75d25770301c40de0b6b3a76400005bf2f559ae714dab83ff36bed4d9e634dfda3ca9ed755d60f00be89e2a20bd00021a281053ba8601a658368594da034c2e99a0fb951b86498d05e76aedfe666800c63659cb228509c819a6895bf2f559ae714dab83ff36bed4d9e634dfda3ca9ed755d60f00be89e2a20bd00dc7fffffffffffffffffffffffffffffffffffffffffffe496703b41203ebd87fc00c3038d7ea4c680000017620f4cdd77b8e469a5ec08a6744c6334410684a9ee91835ac27ae27f3be3ae0000000000000000015bf2f559ae714dab83ff36bed4d9e634dfda3ca9ed755d60f00be89e2a20bd00c409bc9816fba6feaa0000c3071afd498d00000017620f4cdd77b8e469a5ec08a6744c6334410684a9ee91835ac27ae27f3be3ae00000000000000000000010658195be6597135402809b0cf8982ebe1ff9b25f9c3a79cc8b1a67d7d095fd771e8c08dac911469355abb121e7980a9eb23d300f1d41131abafea0ebaecdc0e00'
    const decoded = transactionCodec.decode(Buffer.from(encoded, 'hex'))
    const tx = TransactionCodec.convertToTx(decoded, txId)
    const unsignedTx = tx.unsigned

    expect(unsignedTx.inputs).toEqual([
      {
        outputRef: {
          hint: 372105921,
          key: '3e1ad7c84e697cc65c97a4a5161515ed7dcf91630ab73f49fa2145e9e606f6ab'
        },
        unlockScript: '00034e30eb5dd78000bcbe276e1202d0dc5499398321cc160cc8b10f2a71ffdfe7ca'
      },
      {
        outputRef: {
          hint: 372105921,
          key: '89995088e0355cb2771d63e76a3b9d7f7cac5f1301e29194b6f8dad5d22916b9'
        },
        unlockScript: '00034e30eb5dd78000bcbe276e1202d0dc5499398321cc160cc8b10f2a71ffdfe7ca'
      },
      {
        outputRef: {
          hint: 372105921,
          key: 'e9411abed460ec64a3ef04c44351de07135f951a6ea72fe6281d72c0e394922c'
        },
        unlockScript: '00034e30eb5dd78000bcbe276e1202d0dc5499398321cc160cc8b10f2a71ffdfe7ca'
      },
      {
        outputRef: {
          hint: 372105921,
          key: 'cb32af059f198eb97a987ef0401c60a72b3bde65f2eba6db4206cf020859cdf4'
        },
        unlockScript: '00034e30eb5dd78000bcbe276e1202d0dc5499398321cc160cc8b10f2a71ffdfe7ca'
      }
    ])
    expect(unsignedTx.gasAmount).toEqual(55605)
    expect(unsignedTx.gasPrice).toEqual('100000000000')
    expect(unsignedTx.scriptOpt).toEqual(
      '0101030001000e0c0d1440205bf2f559ae714dab83ff36bed4d9e634dfda3ca9ed755d60f00be89e2a20bd0001131700b4160013c40de0b6b3a7640000a313c40de0b6b3a76400000d0c1440205bf2f559ae714dab83ff36bed4d9e634dfda3ca9ed755d60f00be89e2a20bd00010d'
    )
    expect(unsignedTx.fixedOutputs).toEqual([
      {
        hint: 372105921,
        key: '75aca42781ac293b8ffcd3d241085a5bedf519df6bafa847f5d613c97fa48ef0',
        attoAlphAmount: '1000000000000000',
        address: '12aH6to1JQxDFsvJ89jtFCnKEcub5ew8x2EABGEDMTYyK',
        tokens: [
          {
            id: '1a281053ba8601a658368594da034c2e99a0fb951b86498d05e76aedfe666800',
            amount: '580482468968769158'
          }
        ],
        lockTime: 0,
        message: ''
      },
      {
        hint: 372105921,
        key: 'e0f425509fb1bd1209dc67dc150e3173f03954a27838f04b751a79a8dc63858b',
        attoAlphAmount: '147139601147343278389',
        address: '12aH6to1JQxDFsvJ89jtFCnKEcub5ew8x2EABGEDMTYyK',
        tokens: [],
        lockTime: 0,
        message: ''
      }
    ])

    expect(tx.generatedOutputs).toEqual([
      {
        type: 'ContractOutput',
        hint: 639485753, // note me
        key: '75aca42781ac293b8ffcd3d241085a5bedf519df6bafa847f5d613c97fa48ef0',
        attoAlphAmount: '1000000000000000000',
        address: 'zst5zMzizEeFYFis6DNSknY5GCYTpM85D3yXeRLe2ug3',
        tokens: [
          {
            id: '1a281053ba8601a658368594da034c2e99a0fb951b86498d05e76aedfe666800',
            amount: '256664187705536957490825'
          },
          {
            id: '5bf2f559ae714dab83ff36bed4d9e634dfda3ca9ed755d60f00be89e2a20bd00',
            amount: '57896044618658097711785492504343953926634992332820281890277629223825552803836'
          }
        ]
      },
      {
        type: 'AssetOutput',
        hint: 372105921,
        key: 'e0f425509fb1bd1209dc67dc150e3173f03954a27838f04b751a79a8dc63858b',
        attoAlphAmount: '1000000000000000',
        address: '12aH6to1JQxDFsvJ89jtFCnKEcub5ew8x2EABGEDMTYyK',
        tokens: [
          {
            id: '5bf2f559ae714dab83ff36bed4d9e634dfda3ca9ed755d60f00be89e2a20bd00',
            amount: '701602866441682602'
          }
        ],
        lockTime: 0,
        message: ''
      },
      {
        type: 'AssetOutput',
        hint: 372105921,
        key: 'f677e5e6611f1c8ced9cffd0f2a972689d6058dbbd368963d215cf4ea7afffea',
        attoAlphAmount: '2000000000000000',
        address: '12aH6to1JQxDFsvJ89jtFCnKEcub5ew8x2EABGEDMTYyK',
        tokens: [],
        lockTime: 0,
        message: ''
      }
    ])
    expect(tx.contractInputs).toEqual([
      {
        hint: 639485752,
        key: '4d0c7ac9b94e6f7a9d6f1dc169dedcf91ac5562193430a96345a84cdc75d2577'
      }
    ])
    expect(tx.inputSignatures).toEqual([
      '0658195be6597135402809b0cf8982ebe1ff9b25f9c3a79cc8b1a67d7d095fd771e8c08dac911469355abb121e7980a9eb23d300f1d41131abafea0ebaecdc0e'
    ])
    expect(tx.scriptSignatures).toEqual([])
    expect(tx.scriptExecutionOk).toEqual(true)
    expect(encoded).toEqual(transactionCodec.encode(decoded).toString('hex'))
  })
})
