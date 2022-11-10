import {Component, ComponentInterface, h, State} from '@stencil/core';
import {ServiceRickAndMorty} from "../../services/service.rickAndMorty";

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})
export class AppHome implements ComponentInterface {
  @State() data:any = [];
  async componentWillLoad() {
    const api = new ServiceRickAndMorty();
    this.data = await api.get();
    console.log(this.data);
  }


  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <ion-list>

        </ion-list>
      </ion-content>,
    ];
  }
}
