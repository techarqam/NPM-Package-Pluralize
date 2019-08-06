var collection = process.argv.slice(2);
var file = require('file-system');
var fs = require('fs');

// generateMainFolders();
generateService();


function generateMainFolders() {
    file.mkdir(`Collections/Components/${collection}`);
    file.mkdir(`Collections/Services/${collection}`);
}

function generateService() {

    fs.writeFile(`Collections/Services/${collection}/${collection}.service.ts`,
        `import { Injectable } from '@angular/core';
        import {AngularFirestore} from '@angular/fire/firestore';
        @Injectable({
            providedIn: 'root'
        }) 
        export class ${collection}Service{ 
            constructor(
                public db: AngularFirestore,
              ) { }

              add${collection}(data) {
                return this.db.collection('${collection}').add(data);
              }
              get${collection}Data() {
                return this.db.collection('${collection}').snapshotChanges();
              }
              del${collection}(docId) {
                return this.db.collection('${collection}').doc(docId).delete();
              }


              getSingle${collection}(docId) {
                return this.db.collection('${collection}').doc(docId).snapshotChanges();
              }
            
            
              update${collection}( docData, docId) {
                return this.db.collection('${collection}').doc(docId).update(docData);
              }
            }

        `,





        function (err) {
            if (err) throw err;
            console.log('Service Created!');
        });

}