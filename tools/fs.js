import fs from 'fs'
import path from 'path'

function readFile(file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf8', (err, data) => {
            return err ? reject(err) : resolve(data)
        })
    })
}

function writeFile(file, contents) {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, contents, 'utf8', err => {
            return err ? reject(err) : resolve()
        })
    })
}

function renameFile(source, target) {
    return new Promise((resolve, reject) => {
        fs.rename(source, target, err => {
            return err ? reject(err) : resolve()
        })
    })
}

export default {
    readFile,
    writeFile,
    renameFile
}
