
const mta = {

  nLine: [
    'Times Square',
    '34th',
    '28th',
    '23rd',
    'Union Square',
    '8th'
  ], // n line

  lLine: [
    '8th',
    '6th',
    'Union Square',
    '3rd',
    '1st',
  ], // l line

  sixLine: [
    'Grand Central',
    '33rd',
    '28th',
    '23rd',
    'Union Square',
    'Astor place'
  ], // line

  trainTrip: [],

  findIndexOfNLineSations: function (stops) {
    return this.nLine.indexOf(stops)},  // finds the index from a loop of the name of the station

  travelBetweenStops: function (enterTrainAt, exitTrainAt) {

    if ( enterTrainAt < exitTrainAt) {
      for (let i = enterTrainAt; i <= exitTrainAt; i++) {
        let stops = this.nLine[i]
        this.trainTrip.push(stops);
      }
    } else {
      for (let k = enterTrainAt; k >= exitTrainAt; k-- ) {
      let stops = this.nLine[k]
      this.trainTrip.push(stops);
      }
    }},  //enterTrainAt and exitTrainAt are indexs of the stops

  planSingleLine: function (firstStop, lastStop) {
    let ourFirstStop = this.findIndexOfNLineSations(firstStop);
    let ourLastStop = this.findIndexOfNLineSations(lastStop);
    let fullTrip = this.travelBetweenStops(ourFirstStop, ourLastStop);
  } // calls all the functions



}

mta.planSingleLine('34th', '23rd')
console.log(mta.trainTrip);


// maybe write a few similar function that can be passed in
// function that sorts which line to hop on
// fuction should take the line then pass it inthe travel between stops
