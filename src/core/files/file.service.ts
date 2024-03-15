import { promises } from 'fs'
import { join, dirname, isAbsolute } from 'path'

export class FileService {
  private async doesFileExist(path: string) {
    try {
      await promises.stat(path)
      return true
    } catch {
      return false
    }
  }

  public getFilePath(path: string, name: string, ext: string): string {
    if (!isAbsolute(path)) {
      path = join(__dirname + '/' + path)
    }
    return join(dirname(path) + '/' + name + '.' + ext)
  }

  async deleteFileIfExists(path: string) {
    if (await this.doesFileExist(path)) {
      promises.unlink(path)
    }
  }
}
