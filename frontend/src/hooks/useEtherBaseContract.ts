import { useRecoilValue } from 'recoil'
import { ethers } from 'ethers'

import abi from 'consts/abi.json'

// import { BlockChainType } from 'types/network'
import AuthStore from 'store/AuthStore'
// import SendStore from 'store/SendStore'

const useEtherBaseContract = (): {
  getEtherBaseContract: ({
    contract
  }: {
    contract: string
  }) => ethers.Contract | undefined,
  getNativeBalance: ({
    userAddress
  }: {
    userAddress: string
  }) => Promise<string>
} => {
  const loginUser = useRecoilValue(AuthStore.loginUser)

  const getEtherBaseContract = ({
    contract
  }: {
    contract: string
  }): ethers.Contract | undefined => {
      try {
        // if contract is empty, error occurs
        return contract
          ? new ethers.Contract(contract, abi, loginUser.provider)
          : undefined
      } catch {}
  }

  const getNativeBalance = async ({
    userAddress
  }: {
    userAddress: string
  }): Promise<string> => {
    if (!loginUser.provider){
      return Promise.resolve('0')
    }
    const balance = await loginUser.provider.getBalance(userAddress)
    return balance.toString()
  }

  return {
    getEtherBaseContract,
    getNativeBalance
  }
}

export default useEtherBaseContract
