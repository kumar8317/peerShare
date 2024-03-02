import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer: React.FC = () => (
  <footer>
    <div>
      PeerShare by  <a href="https://github.com/julienc91">Ankit Kumar</a>
    </div>
    <div>
      <FontAwesomeIcon icon={faGithub} />
      <a href="https://github.com/kumar8317/peerShare">See on GitHub</a>
    </div>
  </footer>
)

export default Footer
