import isEmpty from 'components/helpers/isEmpty';

export class Button {
  url: String;
  path: String;
  title: String;
  type: String;

  constructor(url: String, path: String, title: String, type: String) {
    this.url = url;
    this.path = path;
    this.title = title;
    this.type = type;
  }

  public propsAreNotEmpty(): Boolean {
    return isEmpty(this.url) && isEmpty(this.path);
  }

  public getPropToRedirect() {
    const path = isEmpty(this.path);
    const url = isEmpty(this.url);

    return {
      propPath: path,
      propUrl: url,
    };
  }

  public getPath(): String {
    return this.path;
  }

  public getUrl(): String {
    return this.url;
  }

  public getTitle(): String {
    return this.title;
  }

  public getType(): String {
    return this.type;
  }
}
