/*
Imports & definition
*/
  import { Component, OnInit } from '@angular/core';

  // Inner
  import { ApiResponseModel } from "../../models/api.response.model";
  import { CrudService } from '../../services/crud/crud.service';

  @Component({
    selector: 'app-campaign-page',
    templateUrl: './campaign-page.component.html',
    styles: [
    ],
  })
//

export class CampaignPageComponent implements OnInit {

  // Properties
  public listOffer: any;

  public messageClass: String;
  public apiMessage: String;

  constructor(
    private CrudService: CrudService
  ) { }

  /*
  Methods
  */
    public getListOffer = () => {
      this.CrudService.readAllItems('offer')
      .then( (apiResponse: ApiResponseModel) => {
        // API success response
        console.log(apiResponse.data);

        this.messageClass = 'success';
        this.apiMessage = apiResponse.message;

        this.listOffer = apiResponse.data;
      })
      .catch( (apiResponse: ApiResponseModel) => {
        // API error response
        this.messageClass = 'error';
        this.apiMessage = apiResponse.message;
      })
    }
  //

  /*
  Hooks
  */
    async ngOnInit() {
      await this.getListOffer();
    };
  //

}
