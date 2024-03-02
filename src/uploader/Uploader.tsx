import React, { useCallback, useState } from 'react'
import {
  faTrash,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FileUploader from './FileUploader'
import WebrtcClient from './WebrtcClient'
import { formatSize, getFileIcon, splitFileExtension } from '../utils'

const Uploader: React.FC = () => {
  const [file, setFile] = useState<File | null>(null)
  const [start, setStart] = useState(false)

  const handleReset = useCallback(() => {
    setFile(null)
    setStart(false)
  }, [setFile, setStart])

  const handleStartWebrtcClient = useCallback(() => {
    setStart(true)
  }, [setStart])

  const [filename, extension] = splitFileExtension(file?.name || '')
  const fileIcon = getFileIcon(file?.type || '')

  return (
    <>
      <section>
        <h1>Share a file</h1>

        {!file && <FileUploader onFileSelected={setFile} />}
        {file && (
          <div>
            <div className="uploaded-file">
              <FontAwesomeIcon className="file-icon" icon={fileIcon} />
              <span className="file-name">{filename}</span>
              <span className="file-extension">{extension}</span>
              <span className="file-size">{formatSize(file.size)}</span>
              <FontAwesomeIcon
                className={start ? 'hidden' : ''}
                icon={faTrash}
                onClick={handleReset}
              />
            </div>
            <div>
              {!start && (
                <button
                  className="default-button"
                  onClick={handleStartWebrtcClient}
                >
                  Start sharing
                </button>
              )}
            </div>
          </div>
        )}
        {start && file && <WebrtcClient file={file} />}
      </section>

      <hr />
    </>
  )
}

export default Uploader
