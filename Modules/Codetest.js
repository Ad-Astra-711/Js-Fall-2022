let myName = 'Preeya Singh            Code Test            Monday, October 31, 2022'

console.log(`\n\n${myName}\n\n`)



// Question - 1 - 20
/**
 * Create a function to return an array 
 *  after removing given number from the given array
 */ 
/** 
 * Example:
 * input: [1, 2, 3, 4, 5] , 2  
 * output: [1, 3, 4, 5]
 * 
 * input: [21, 32, 12, 43, 45, 65, 12], 12
 * output: [21, 32, 43, 45, 65]
 * 
 * input: [-1, 2, 43, 65] , 11
 * output: [-1, 2, 43, 65]
 */


 const arr1_1 = [1, 2, 3, 4, 5];
 /**const numArrayAfterRemoval1_1 = removeNumFromArray(2, arr1_1);
 console.log(numArrayAfterRemoval1_1);
     // [1, 3, 4, 5]
 **/

 const arr1_2 = [21, 32, 12, 43, 45, 65, 12];
 /**const numArrayAfterRemoval1_2 = removeNumFromArray(12, arr1_2);
 console.log(numArrayAfterRemoval1_2);  
     // [21, 32, 43, 45, 65]
 **/

 const arr1_3 = [-1, 2, 43, 65];
/** const numArrayAfterRemoval1_3 = removeNumFromArray(11, arr1_3);
 console.log(numArrayAfterRemoval1_3);  
     // [-1, 2, 43, 65]
**/


function removeNumFromArray(num, numArray) { 
    
    return numArray.filter(function(ele){ 
        return ele != num; 
    });
}

console.log(removeNumFromArray(2, arr1_1))
console.log(removeNumFromArray(12,arr1_2))
console.log(removeNumFromArray(11,arr1_3))    

 
// Question - 2 - 30
/**
 * Create a function to convert all student-names into Titlecase.
 * Return the updated allStudentsData
 *
 * const updateStudentRecord = titleCaseAllStudentNames(allStudentData_3)
 * console.log(updateStudentRecord)
 **/

/**
 * Example:
 * 
 * input:
 * let allStudentData_3 = [
 *      {
 *          id: 1,
 *          name: 'haRrY poTteR',
 *      },
 *      {
 *          id: 2,
 *          name: 'KiNG koNG',
 *      },
 *      {
 *          id: 3,
 *          name: 'laNa geRe',
 *      },
 *      {
 *          id: 4,
 *          name: 'cHaSe LAN',
 *      },
 *      {
 *          id: 5,
 *          name: 'mAYa paSha',
 *      }
 * ]
 * 
 * output/Return:
 * [
 *      {
 *          id: 1,
 *          name: 'Harry Potter',
 *      },
 *      {
 *          id: 2,
 *          name: 'King Kong',
 *      },
 *      {
 *          id: 3,
 *          name: 'Lana Gere',
 *      },
 *      {
 *          id: 4,
 *          name: 'Chase Lan',
 *      },
 *      {
 *          id: 5,
 *          name: 'Maya Pasha',
 *      }
 * ]
 * 
 * 
 * let allStudentData_3 = [
 *      {
 *          id: 1,
 *          name: 'leo',
 *      },
 *      {
 *          id: 2,
 *          name: 'greg COlL',
 *      },
 *      {
 *          id: 3,
 *          name: 'Adien Row',
 *      },
 *      {
 *          id: 4,
 *          name: 'cheville jUSa',
 *      }
 * ]
 * 
 * output/Return:
 * [
 *      {
 *          id: 1,
 *          name: 'Leo',
 *      },
 *      {
 *          id: 2,
 *          name: 'Greg Coll',
 *      },
 *      {
 *          id: 3,
 *          name: 'Adien Row',
 *      },
 *      {
 *          id: 4,
 *          name: 'Cheville Jusa',
 *      }
 * ]
 **/


 let allStudentData2_1 = [
    {
        id: 1,
        name: 'haRrY',
    },
    {
        id: 2,
        name: 'KiNG',
    },
    {
        id: 3,
        name: 'laNa',
    },
    {
        id: 4,
        name: 'cHaSe',
    },
    {
        id: 5,
        name: 'mAYa',
    }
];

/**
const updateStudentRecord2_1 = titleCaseAllStudentNames(allStudentData2_1)
console.log(updateStudentRecord2_1);
**/


function titleCaseAllStudentNames(allStudentData) {
    let object = allStudentData
    let nameSplit = allStudentData['name'].toUpperCase().split(' ')
    Object.keys(allStudentData).forEach (key => {
        allStudentData['name'].nameSplit[i].charAt(0) + nameSplit[i].toLowerCase().slice(1) + ' ' ;
    });
}



function titleCaseAllStudentNames (allStudentData) {
    for (prop in allStudentData) {
        let updateStudentRecord = allStudentData.name
        if (prop === 'name') {
        updateStudentRecord = allStudentData.map((nameToTitleCase)=>nameToTitleCase.name)
    }
    return updateStudentRecord
  }        
} console.log(titleCaseAllStudentNames(allStudentData2_1))




function titleCaseAllStudentNames (allStudentData)

allStudentDataUpdata = {...allStudentData.name,

}








/** 
        if (prop === 'name') {
            let splitsent = [prop].toUpperCase().split(' ')
            let titleWords = ' '
            for(let i=0; i < splitsent.length; i++) {
                titleWords = titleWords += splitsent[i].charAt(0) + splitsent[i].toLowerCase().slice(1) + ' '
            }
            return titleWords.trim();  
        }
      }
    }
      console.log(titleCaseAllStudentNames(allStudentData2_1))
**/

/** 
function titleCase(sentAny) {
    let splitsent = sentAny.toUpperCase().split(' ')
    let titleWords = ' '
    for(let i=0; i < splitsent.length; i++) {
        titleWords = titleWords += splitsent[i].charAt(0) + splitsent[i].toLowerCase().slice(1) + ' '
    }
    return titleWords.trim();  


**/

/**
 * [
 *      {
 *          id: 1,
 *          name: 'Harry Potter',
 *      },
 *      {
 *          id: 2,
 *          name: 'King Kong',
 *      },
 *      {
 *          id: 3,
 *          name: 'Lana Gere',
 *      },
 *      {
 *          id: 4,
 *          name: 'Chase Lan',
 *      },
 *      {
 *          id: 5,
 *          name: 'Maya Pasha',
 *      }
 * ]
 *

// const updateStudentRecord2_2 = titleCaseAllStudentNames(allStudentData2_2)
// console.log(updateStudentRecord2_2);
/**
 * [
 *      {
 *          id: 1,
 *          name: 'Leo',
 *      },
 *      {
 *          id: 2,
 *          name: 'Greg Coll',
 *      },
 *      {
 *          id: 3,
 *          name: 'Adien Row',
 *      },
 *      {
 *          id: 4,
 *          name: 'Cheville Jusa',
 *      }
 * ]
 **/




/** Question - 3 - 50
let allStudentRecords_3 = [
    {
        id: 1,
        name: 'Adien owjh',
    },
    {
        id: 2,
        name: 'kristEn sole',
    },
    {
        id: 3,
        name: 'ReMA',
    },
    {
        id: 4,
        name: 'chess GamE',
    },
    {
        id: 5,
        name: 'mAYa',
    }
];
**/
/**
 * Create a function to update first name for the student.
 * Student will provide the student-id and NEW FIRST NAME
 * 
 * if student is present in the records AND new FIRST name is different (or NOT EXACTLY present) than already present first name
 *      update the record with student's first name.
 *      print message -> Your name is updated successfully, new full name in the records: "firstName lastName"
 *      (show lastName if that was present already)
 * 
 * if student is present in the records AND new FIRST name is EXACTLY SAME as already present in the records
 *      Do not update the student name
 *      print message -> Provided New firstName is same as of in the records, full name in the records: "firstName lastName"
 *      (show lastName if that was present already)
 * 
 * if student-id is NOT present in the records
 *      Do not update the student name
 *      print message -> Invalid student id provided.
 */


/**
function updateFirstName(sId, newFirstName, studentRecords) {
    // code
}

updateFirstName(1, 'justin', allStudentRecords_3)
    // Your name is updated successfully, new full name in the records: "justin owjh"

updateFirstName(5, 'simmy', allStudentRecords_3);
    // Your name is updated successfully, new full name in the records: "simmy"

updateFirstName(6, 'sole', allStudentRecords_3);
    // Invalid student id provided.

updateFirstName(4, 'chess', allStudentRecords_3);
    // Provided New firstName is same as of in the records, full name in the records: "chess GamE"

    **/