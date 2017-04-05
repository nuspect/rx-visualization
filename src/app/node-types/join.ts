import {Observable} from "rxjs/Rx";

export class Join {
  public static title = "Join";
  public static link = "http://reactivex.io/documentation/operators/join.html";
  public static desc = "combine items emitted by two Observables whenever an item from one Observable is emitted during a time window defined according to an item emitted by the other Observable";

  public runner = () => {
    return this.graphInputs[0].join(
      this.graphInputs[1]/* the second observable connected to this block */,
      Join.propertiesType[0].types[this.properties.fi1].func,
      Join.propertiesType[1].types[this.properties.fi2].func,
      Join.propertiesType[2].types[this.properties.fi3].func,
    )
  };

  private static propertiesType = [
    {fi1: 'function',types:[
    {name:"timeout",func:()=>{Observable.timer(0)},text:"()=>{Observable.timer(0)}"},
  ]},
    {fi2: 'function',types:[
      {name:"timeout",func:()=>{Observable.timer(0)},text:"()=>{Observable.timer(0)}"},
    ]},
    {fi3: 'function',types:[
      {name:"timeout",func:(x,y)=>{return x+y},text:"(x+y)=>{return x+y}"},
    ]},
  ];
  public properties = {
    fi1: 0,
    fi2: 0,
    fi3: 0,
  };

  public graphInputs = [];
  public static maxInput = 2;
  public static minInput = 2;

  public commandMaker = ({}) => {
    return '.join('+this.graphInputs[1].commandMaker()
      +', '+Join.propertiesType[1].types[this.properties.fi3].func
      +', '+Join.propertiesType[2].types[this.properties.fi3].func
      +', '+Join.propertiesType[3].types[this.properties.fi3].func
      +')';
  }
}
