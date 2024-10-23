const Footer = () => {
  return (
    <footer className="bg-footer responsive-padding pt-12 pb-4">
      <div className="flex flex-col justify-between items-center gap-8">
        <img alt="Logo Eventick" src={require('src/assets/logo.png')} />
        <p className="font-extralight text-white text-center max-w-[500px]">
          Eventick is a global self-service ticketing platform for live
          experiences that allows anyone to create, share, find and attend
          events that fuel their passions and enrich their lives.
        </p>
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/welladam/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-12" src={require('src/assets/linkedin.png')} />
          </a>
          <a
            href="https://www.github.com/welladam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-12" src={require('src/assets/github.png')} />
          </a>
        </div>
        <div className="flex flex-col w-full gap-4">
          <div className="w-full h-0.5 bg-border" />
          <span className="font-extralight text-white text-center">
            Copyright © 2024 Wellington Adam
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
