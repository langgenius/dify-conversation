import Image from 'next/image'

const PowerBy = () => {
  return <a className='flex items-center pr-3 space-x-3' href="https://dify.ai/" target="_blank">
    <span className='uppercase text-xs text-gray-400'>power by</span>
    <Image
      src="/logo.png"
      alt="Dify.AI Logo"
      width={48}
      height={20}
      priority
    />
  </a>
}

export default PowerBy
