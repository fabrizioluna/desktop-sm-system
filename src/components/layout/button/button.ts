import isEmpty from 'components/helpers/isEmpty';

export class Button {
  url: String;
  path: String;
  title: String;

  constructor(url: String, path: String, title: String) {
    this.url = url;
    this.path = path;
    this.title = title;
  }

  public propsAreNotEmpty() {
    return isEmpty(this.url) && isEmpty(this.path);
  }

  public getPropToRedirect() {
    const path = isEmpty(this.path);
    const url = isEmpty(this.url);

    return {
      path,
      url,
    };
  }

  public getPath() {
    return this.path;
  }

  public getUrl() {
    return this.url;
  }

  public getTitle() {
    return this.title;
  }
}
