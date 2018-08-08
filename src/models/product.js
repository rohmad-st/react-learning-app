
export default class Product {
  constructor (id, title, image, authors, description, source, is_favorite = false) {
    this.id = id
    this.title = title
    this.image = image
    this.authors = authors
    this.description = description
    this.source = source
    this.is_favorite = is_favorite
  }

  static fromAPI (object) {
    return new Product(
      object.id,
      object.volumeInfo.title,
      object.volumeInfo.imageLinks.thumbnail,
      object.volumeInfo.authors,
      object.volumeInfo.description,
      object.volumeInfo.infoLink,
      object.is_favorite
    )
  }
  
  static fromState (object) {
    return new Product(
      object.id,
      object.title,
      object.image,
      object.authors,
      object.description,
      object.source,
      object.is_favorite
    )
  }
}
