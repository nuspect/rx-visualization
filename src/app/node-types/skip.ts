import {Observable} from "rxjs/Rx";

export class Skip {
  protected static title = "Skip";
  protected static link = "http://reactivex.io/documentation/operators/skip.html";
  protected static desc = "suppress the first n items emitted by an Observable";
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = [{name:"itemCount",type: "number"}];

  public runner = ({}) => {
    return this.graphInputs[0].skip(this.properties.itemCount);
  };
  public toString = ({}) => {
    return '.skip(' + this.properties.itemCount + '))';
  };


  public properties = {
    itemCount: 2
  };
  public graphInputs = [];
}
