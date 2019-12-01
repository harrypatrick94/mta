
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
    'Astor Place'
  ], // line

  trainTrip: [],
  firstHalf: [],
  secondHalf: [],

  unionOnNLine: 4,
  oneBeforeUnionNLine: 3,
  oneAfterUnionNLine: 5,
  unionOnLLine: 2,
  oneBeforeUnionLLine: 1,
  oneAfterUnionLLine: 3,
  unionOnSixLine: 4,
  oneBeforeUnionSixLine: 3,
  oneAfterUnionSixLine: 5,

  findIndexOfNLineSations: function (stops) {
    return this.nLine.indexOf(stops)},  // finds the index from a loop of the name of the station on N line

  travelBetweenStopsNLine: function (enterTrainAt, exitTrainAt) {

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
    }}, //allows travel along nLine

  findIndexOfLLineSations: function (stops) {
    return this.lLine.indexOf(stops)},  // finds the index from a loop of the name of the station on L line

  travelBetweenStopsLLine: function (enterTrainAt, exitTrainAt) {

    if ( enterTrainAt < exitTrainAt) {
      for (let i = enterTrainAt; i <= exitTrainAt; i++) {
        let stops = this.lLine[i]
        this.trainTrip.push(stops);
      }
    } else {
      for (let k = enterTrainAt; k >= exitTrainAt; k-- ) {
      let stops = this.lLine[k]
      this.trainTrip.push(stops);
      }
    }
  }, // allows travel along lLine

  findIndexOfSixLineSations: function (stops) {
    return this.sixLine.indexOf(stops)},  // finds the index from a loop of the name of the station on Six line

  travelBetweenStopsSixLine: function (enterTrainAt, exitTrainAt) {

    if ( enterTrainAt < exitTrainAt) {
      for (let i = enterTrainAt; i <= exitTrainAt; i++) {
        let stops = this.sixLine[i]
        this.trainTrip.push(stops);
      }
    } else {
      for (let k = enterTrainAt; k >= exitTrainAt; k-- ) {
      let stops = this.sixLine[k]
      this.trainTrip.push(stops);
      }
    }
  }, //allows travel along the six

  nLineToOtherLine: function (enterTrainAt){
    if (enterTrainAt < this.unionOnNLine) {
      for (let i = enterTrainAt; i <= this.unionOnNLine; i++) {
        let stops = this.nLine[i]
        this.firstHalf.push(stops);
      }
    } else {
      for (let k = enterTrainAt; k >= this.unionOnNLine; k--) {
        let stops = this.nLine[k]
        this.firstHalf.push(stops);
      }
    }
  }, //train will start on nline and finish at union square

  otherLineToNLine: function (exitTrainAt) {
    if (exitTrainAt <= this.unionOnNLine) {
      for (var i = this.oneBeforeUnionNLine; i >= exitTrainAt; i--) {
        let stops = this.nLine[i]
        this.secondHalf.push(stops);
      }
      } else {
        for (let k = this.oneAfterUnionNLine; k <= exitTrainAt; k++) {
          let stops = this.nLine[k]
          this.secondHalf.push(stops);
        }
      }
    }, // travels from union square to other lines

  lLineToOtherLine: function (enterTrainAt){
    if (enterTrainAt < this.unionOnLLine) {
      for (let i = enterTrainAt; i <= this.unionOnLLine; i++) {
        let stops = this.lLine[i]
        this.firstHalf.push(stops);
      }
    } else {
      for (let k = enterTrainAt; k >= this.unionOnLLine; k--) {
        let stops = this.lLine[k]
        this.firstHalf.push(stops);
      }
    }
  }, // train will start on lline and finish at union square

  otherLineToLLine: function (exitTrainAt) {
      if (exitTrainAt <= this.unionOnLLine) {
        for (var i = this.oneBeforeUnionLLine; i >= exitTrainAt; i--) {
          let stops = this.lLine[i]
          this.secondHalf.push(stops);
        }
        } else {
          for (let k = this.oneAfterUnionLLine; k <= exitTrainAt; k++) {
            let stops = this.lLine[k]
            this.secondHalf.push(stops);
          }
        }
      },

  sixLineToOtherLine: function (enterTrainAt){
    if (enterTrainAt < this.unionOnSixLine) {
      for (let i = enterTrainAt; i <= this.unionOnSixLine; i++) {
        let stops = this.sixLine[i]
        this.firstHalf.push(stops);
      }
    } else {
      for (let k = enterTrainAt; k >= this.unionOnSixLine; k--) {
        let stops = this.sixLine[k]
        this.firstHalf.push(stops);
      }
    }
  }, // train will start on sixline and finish at union Square

  otherLineToSixLine: function (exitTrainAt) {
    if (exitTrainAt <= this.unionOnSixLine) {
      for (var i = this.oneBeforeUnionSixLine; i >= exitTrainAt; i--) {
        let stops = this.sixLine[i]
        this.secondHalf.push(stops);
        }
      } else {
        for (let k = this.oneAfterUnionSixLine; k <= exitTrainAt; k++) {
          let stops = this.sixLine[k]
          this.secondHalf.push(stops);
        }
      }
    },

  totalStops: 0,

  addTheStops: function () {
    let addingStops = this.firstHalf.length + this.secondHalf.length
    this.totalStops = this.totalStops + addingStops
  },

  planTrip: function (startingLine, firstStop, endingLine, lastStop) {
// gets the index of the first stop
    if (startingLine === 'nLine') {
      var ourFirstStop = this.findIndexOfNLineSations(firstStop)
    } else if (startingLine === 'lLine') {
      var ourFirstStop = this.findIndexOfLLineSations(firstStop)
    } else {
      var ourFirstStop = this.findIndexOfSixLineSations(firstStop)
    };
// gets the index of the lastStop
    if (endingLine === 'nLine') {
      var ourLastStop = this.findIndexOfNLineSations(lastStop)
    } else if (endingLine === 'lLine') {
      var ourLastStop = this.findIndexOfLLineSations(lastStop)
    } else {
      var ourLastStop = this.findIndexOfSixLineSations(lastStop)
    };

    let indexOfBegin = ourFirstStop
    let indexOfEnd = ourLastStop
    let singleLineTrip = true

    if (startingLine === 'nLine' && endingLine === 'nLine') {
        var fullTrip = this.travelBetweenStopsNLine(indexOfBegin, indexOfEnd)
        singleLineTrip = true
    } else if (startingLine === 'lLine' && endingLine === 'lLine') {
        var fullTrip = this.travelBetweenStopsLLine(indexOfBegin, indexOfEnd)
        singleLineTrip = true
    } else if (startingLine === 'sixLine' && endingLine === 'sixLine') {
        var fullTrip = this.travelBetweenStopsSixLine(indexOfBegin, indexOfEnd)
        singleLineTrip = true
    } else if (startingLine === 'nLine' && endingLine === 'lLine') {
        var startingJourney = this.nLineToOtherLine(indexOfBegin)
        var endingJourney = this.otherLineToLLine(indexOfEnd)
        singleLineTrip = false
    } else if (startingLine === 'nLine' &&  endingLine === 'sixLine' ) {
        var startingJourney = this.nLineToOtherLine(indexOfBegin)
        var endingJourney = this.otherLineToSixLine(indexOfEnd)
        singleLineTrip = false
    } else if (startingLine === 'lLine' && endingLine === 'nLine') {
        var startingJourney = this.lLineToOtherLine(indexOfBegin)
        var endingJourney = this.otherLineToNLine(indexOfEnd)
        singleLineTrip = false
    } else if (startingLine === 'lLine' && endingLine === 'sixLine') {
        var startingJourney = this.lLineToOtherLine(indexOfBegin)
        var endingJourney = this.otherLineToSixLine(indexOfEnd)
        singleLineTrip = false
    } else if (startingLine === 'sixLine' && endingLine === 'nLine'){
        var startingJourney = this.sixLineToOtherLine(indexOfBegin)
        var endingJourney = this.otherLineToNLine(indexOfEnd)
        singleLineTrip = false
    } else if (startingLine === 'sixLine' && endingLine === 'lLine') {
        var startingJourney = this.sixLineToOtherLine(indexOfBegin)
        var endingJourney = this.otherLineToLLine(indexOfEnd)
        singleLineTrip = false
    } else {
      return undefined
    }

    this.addTheStops()

    if (singleLineTrip === true) {
      console.log(`You must travel the the following stops on the ${startingLine}: ${this.trainTrip}. Your trip finishes on ${endingLine}. Your train trip has stops`);
    } else {
      console.log(`You must travel the the following stops on the ${startingLine}: ${this.firstHalf}. You change at Union station and continue on these stops ${this.secondHalf}. Your trip finishes on the ${endingLine}. Your train trip has stops ${this.totalStops}`);
    }



  },
}


// console.log() shows output similar to this:
// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."
mta.planTrip('nLine', '23rd', 'lLine', '8th')

// console.log(mta.trainTrip);
console.log(mta.firstHalf);
console.log(mta.secondHalf);


// maybe write a few similar function that can be passed in
// fuction should take the line then pass it inthe travel between stops
// function between the lines
// for function hint
// 2 arrays one for the line to us one out of us
