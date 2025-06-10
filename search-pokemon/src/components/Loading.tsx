import Image from "next/image"

const Loading = () => {
  return (
    <div className="my-4 flex justify-center items-center">
      <Image
        src={'/pokeball_highlight.png'}
        alt="loading..."
        width={30}
        height={30}
        className="animate-spin"
      />
    </div>
  )
}

export default Loading;
