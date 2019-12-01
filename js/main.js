
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
    if (enterTrainAt <= 4) {
      for (let i = enterTrainAt; i <= 3; i++) {
        let stops = this.nLine[i]
        this.trainTrip.push(stops);
      }
    } else {
      for (let k = enterTrainAt; k >= 5; k--) {
        let stops = this.nLine[k]
        this.trainTrip.push(stops);
      }
    }
  }, //train will start on nline and finish at union square

  otherLineToNLine: function (exitTrainAt) {
    if (exitTrainAt < 4) {
      for (var i = 4; i >= exitTrainAt; i--) {
        let stops = this.nLine[i]
        this.trainTrip.push(stops);
      }
      } else {
        for (let k = 4; k <= exitTrainAt; k++) {
          let stops = this.nLine[k]
          this.trainTrip.push(stops);
        }
      }
    }, // travels from union square to other lines

  lLineToOtherLine: function (enterTrainAt){
    if (enterTrainAt <= 2) {
      for (let i = enterTrainAt; i <= 1; i++) {
        let stops = this.lLine[i]
        this.trainTrip.push(stops);
      }
    } else {
      for (let k = enterTrainAt; k >= 3; k--) {
        let stops = this.lLine[k]
        this.trainTrip.push(stops);
      }
    }
  }, // train will start on lline and finish at union square

  otherLineToLLine: function (exitTrainAt) {
      if (exitTrainAt < 2) {
        for (var i = 2; i >= exitTrainAt; i--) {
          let stops = this.lLine[i]
          this.trainTrip.push(stops);
        }
        } else {
          for (let k = 2; k <= exitTrainAt; k++) {
            let stops = this.lLine[k]
            this.trainTrip.push(stops);
          }
        }
      },

  sixLineToOtherLine: function (enterTrainAt){
    if (enterTrainAt <= 4) {
      for (let i = enterTrainAt; i <= 3; i++) {
        let stops = this.sixLine[i]
        this.trainTrip.push(stops);
      }
    } else {
      for (let k = enterTrainAt; k >= 5; k--) {
        let stops = this.sixLine[k]
        this.trainTrip.push(stops);
      }
    }
  }, // train will start on sixline and finish at union Square

  otherLineToSixLine: function (exitTrainAt) {
    if (exitTrainAt < 4) {
      for (var i = 4; i >= exitTrainAt; i--) {
        let stops = this.sixLine[i]
        this.trainTrip.push(stops);
        }
      } else {
        for (let k = 4; k <= exitTrainAt; k++) {
          let stops = this.sixLine[k]
          this.trainTrip.push(stops);
        }
      }
    },

  defineTheLine: function (startingLine, firstStop, endingLine, lastStop) {
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


    if (startingLine === 'nLine' && endingLine === 'nLine') {
        var fullTrip = this.travelBetweenStopsNLine(indexOfBegin, indexOfEnd)
    } else if (startingLine === 'lLine' && endingLine === 'lLine') {
        var fullTrip = this.travelBetweenStopsLLine(indexOfBegin, indexOfEnd)
    } else if (startingLine === 'sixLine' && endingLine === 'sixLine') {
        var fullTrip = this.travelBetweenStopsSixLine(indexOfBegin, indexOfEnd);
    } else if (startingLine === 'nLine' && endingLine === 'lLine') {
        var startingAtN = this.nLineToOtherLine(indexOfBegin)
        var endingAtL = this.otherLineToLLine(indexOfEnd)
    } else if (startingLine === 'nLine' &&  endingLine === 'sixLine' ) {
        var startingAtN = this.nLineToOtherLine(indexOfBegin)
        var endingAtSix = this.otherLineToSixLine(indexOfEnd)
    } else if (startingLine === 'lLine' && endingLine === 'nLine') {
        var startingAtL = this.lLineToOtherLine(indexOfBegin)
        var endingAtN = this.otherLineToNLine(indexOfEnd)
    } else if (startingLine === 'lLine' && endingLine === 'sixLine') {
        var startingAtL = this.lLineToOtherLine(indexOfBegin)
        var endingAtSix = this.otherLineToSixLine(indexOfEnd)
    } else if (startingLine === 'sixLine' && endingLine === 'nLine'){
        var startingAtSix = this.sixLineToOtherLine(indexOfBegin)
        var endingAtN = this.otherLineToNLine(indexOfEnd)
    } else if (startingLine === 'sixLine' && endingLine === 'lLine') {
        var startingAtSix = this.sixLineToOtherLine(indexOfBegin)
        var endingAtL = this.otherLineToLLine(indexOfEnd)
    } else {
      return undefined
    }
  },
}


mta.defineTheLine('sixLine', 'Astor Place', 'nLine', '8th')
// mta.sixLineToOtherLine(1)
// mta.otherLineToLLine(4)


console.log(mta.trainTrip);


// maybe write a few similar function that can be passed in
// fuction should take the line then pass it inthe travel between stops
// function between the lines
// for function hint
// 2 arrays one for the line to us one out of us
