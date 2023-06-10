'use client';
// 'use client'; This is a NextJs 13.4 feature, you can ignore it (comment out)
import exportFromJSON from 'export-from-json';

//Example
// let jsonData = [{ foo: 'foo' }, { bar: 'bar' }];

export const exportToCsv = (jsonData, saveFileName) => {
  // jsonData (JSON Object)
  //saveFileName (The name to be saved as)
  //exportType (The type of file to be exported as:  text, css, html, json, csv, xls or xml)

  const data = jsonData;
  const fileName = saveFileName;
  const exportType = exportFromJSON.types.csv;

  exportFromJSON({ data, fileName, exportType });
};
