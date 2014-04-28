/* terzo esercizio */
/*
	1,0,0
	0,1,0
	0,0,1
*/
var i,j,ins;
var row = '\n';
for(i=1; i<=10; i++) {
	for(j=1; j<=10; j++) {
		j===i ? ins = '1' : ins = '0'; 
		j===10 ? row += ins+'\t' : row += ins+',\t';
	}
	console.log(row);
	row = '';
}
