import { Component,OnInit  } from '@angular/core';
import { DataService } from '../../services/data.service';

interface DistrictData {
  delta: {
    tested?: number;
    confirmed?: number;
    deceased?: number;
    recovered?: number;
    vaccinated1?: number;
    vaccinated2?: number;
  };
  delta21_14?: {
    confirmed: number;
  };
  delta7?: {
    confirmed?: number;
    deceased?: number;
    recovered?: number;
    tested?: number;
    vaccinated1?: number;
    vaccinated2?: number;
  };
  districts?: {
    [districtName: string]: DistrictData;
  };
  meta?: {
    population?: number;
    tested?: {
      date: string;
      source: string;
    };
  };
  total?: {
    confirmed?: number;
    deceased?: number;
    recovered?: number;
    tested?: number;
    vaccinated1?: number;
    vaccinated2?: number;
  };
}

interface StateData {
  [stateCode: string]: DistrictData;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit  {
  result:{
name: string,
value:string
  }[]=[]
  // result: string[] = [];
  resultGraph:{
    name: string,
    value:string
      }[]=[]

  confirmed:{
  name:string;
  value:number
} = {
  name:"",
  value:0
}
  deceased :{
  name:string;
  value:number
}= {
  name:"",
  value:0
}

  recovered :{
  name:string;
  value:number
}= {
  name:"",
  value:0
}

  tested :{
  name:string;
  value:number
}= {
  name:"",
  value:0
}

  vaccinated1:{
  name:string;
  value:number
}= {
  name:"",
  value:0
}

vaccinated2:{
  name:string;
  value:number
}= {
  name:"",
  value:0
}


  stateData!: StateData; // Declare StateData property
  constructor(private DataService: DataService) { }
  ngOnInit(): void {

    this.fetchData();
    this.fetchDataGraph2();
  }

  fetchData() {
    this.DataService.getData().subscribe(data => {
      // console.log(data); // Here you can assign the data to a variable or process it further
      this.stateData = data
      this.confirmed={
        name:"",
        value:0,
      }
       this.deceased={
        name:"",
        value:0,
      }
      this.recovered={
        name:"",
        value:0,
      }
      this.tested ={
        name:"",
        value:0,
      }
      this.vaccinated1={
        name:"",
        value:0,
      }
      this.vaccinated2 ={
        name:"",
        value:0,
      }
      for (const key in this.stateData) {
        if (this.stateData.hasOwnProperty(key)) {
          var delta = this.stateData[key]?.delta;
          if (delta && typeof delta.confirmed === 'number') {
            this.confirmed.value += delta.confirmed;
          }
          if(delta && typeof delta.deceased === 'number'){
            this.deceased.value += delta.deceased;
          }
          if(delta && typeof delta.recovered === 'number'){
            this.recovered.value += delta.recovered;
          }
          if(delta && typeof delta.tested === 'number'){
            this.tested.value += delta.tested;
          }
          if(delta && typeof delta.vaccinated1 === 'number'){
            this.vaccinated1.value += delta.vaccinated1;
          }
          if(delta && typeof delta.vaccinated2 === 'number'){
            this.vaccinated2.value += delta.vaccinated2;
          }
        }
      }

      this.result = [{
        name: "confirmed",
        value: this.confirmed.value.toString()
      },
      {
        name: "deceased",
        value: this.deceased.value.toString()
      },
      {
        name: "recovered",
        value: this.recovered.value.toString()
      },
      {
        name: "tested",
        value: this.tested.value.toString()
      },
      {
        name: "vaccinated1",
        value: this.vaccinated1.value.toString()
      },
      {
        name: "vaccinated2",
        value: this.vaccinated2.value.toString()
      }]
      console.log("results", this.result)

    },
    (error) => {
      console.error('Error fetching data:', error);
    });
    console.log("results....", this.result)

  }

  fetchDataGraph2() {
    this.DataService.getData().subscribe(data => {
      // console.log(data); // Here you can assign the data to a variable or process it further
      this.stateData = data
      this.confirmed={
        name:"",
        value:0,
      }
       this.deceased={
        name:"",
        value:0,
      }
      this.recovered={
        name:"",
        value:0,
      }
      this.tested ={
        name:"",
        value:0,
      }
      this.vaccinated1={
        name:"",
        value:0,
      }
      this.vaccinated2 ={
        name:"",
        value:0,
      }
      for (const key in this.stateData) {
        if (this.stateData.hasOwnProperty(key)) {
          var delta7 = this.stateData[key]?.delta7;
          if (delta7 && typeof delta7.confirmed === 'number') {
            this.confirmed.value += delta7.confirmed;
          }
          if(delta7 && typeof delta7.deceased === 'number'){
          this.deceased.value += delta7.deceased;
          }
          if(delta7 && typeof delta7.recovered === 'number'){
            this.recovered.value += delta7.recovered;
          }
          if(delta7 && typeof delta7.tested === 'number'){
            this.tested.value += delta7.tested;
          }
          if(delta7 && typeof delta7.vaccinated1 === 'number'){
            this.vaccinated1.value += delta7.vaccinated1;
          }
          if(delta7 && typeof delta7.vaccinated2 === 'number'){
            this.vaccinated2.value += delta7.vaccinated2;
          }
        }
      }

      this.resultGraph = [{
        name: "confirmed",
        value: this.confirmed.value.toString()
      },
      {
        name: "deceased",
        value: this.deceased.value.toString()
      },
      {
        name: "recovered",
        value: this.recovered.value.toString()
      },
      {
        name: "tested",
        value: this.tested.value.toString()
      },
      {
        name: "vaccinated1",
        value: this.vaccinated1.value.toString()
      },
      {
        name: "vaccinated2",
        value: this.vaccinated2.value.toString()
      }]

      console.log("resultGraph", this.resultGraph)

    },
    (error) => {
      console.error('Error fetching data of resultGraph:', error);
    });
    console.log("resultGraph....", this.resultGraph)

  }
}
