/* secondo esercizio */
/*
	1,2,3
	2,4,6
	3,6,9
*/
var i,j;
var row = '\n';
for(i=1; i<=10; i++) {
	for(j=1; j<=10; j++)
		j<10 ? row += j*i+',\t' : row += j*i+'\t';
	console.log(row);
	row = '';
}
