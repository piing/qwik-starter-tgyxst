//import { qwikify$ } from '@builder.io/qwik-react';
import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
//import * as React from 'react';
//import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page, Sort } from '@syncfusion/ej2-react-grids';

//import { data } from './datasource';

import { Example } from '~/components/syndemo';
 
export default component$(() => {
  console.log('Qwik Render');

  return (
    <Example />
  );
});

/* export const SynColumnDirective = qwikify$(ColumnDirective);
export const SynColumnsDirective = qwikify$(ColumnsDirective);
export const SynGridComponent = qwikify$(GridComponent);
export const SynInject = qwikify$(Inject);
export const SynPage = qwikify$(Page);
export const SynSort = qwikify$(Sort); */

/* export default component$(() => {
  return (
    <><h1>hello syn</h1>
    <SynGridComponent dataSource={data} allowPaging={true}>
              <SynColumnsDirective>
                <SynColumnDirective field="OrderID" width="100" textAlign="Right" />
                <SynColumnDirective field="CustomerID" width="100" />
                <SynColumnDirective field="EmployeeID" width="100" textAlign="Right" />
                <SynColumnDirective field="Freight" width="100" format="C2" textAlign="Right"/>
                <SynColumnDirective field="ShipCountry" width="100" />
              </SynColumnsDirective>
              <SynInject services={[SynPage, SynSort]} />
            </SynGridComponent></>
  )
}
);  */
/*
export const Example = qwikify$(
    function Example() {
        return (
            <><SynGridComponent dataSource={data} allowPaging={true}>
              <SynColumnsDirective>
                <SynColumnDirective field="OrderID" width="100" textAlign="Right" />
                <SynColumnDirective field="CustomerID" width="100" />
                <SynColumnDirective field="EmployeeID" width="100" textAlign="Right" />
                <SynColumnDirective field="Freight" width="100" format="C2" textAlign="Right"/>
                <SynColumnDirective field="ShipCountry" width="100" />
              </SynColumnsDirective>
              <SynInject services={[SynPage, SynSort]} />
            </SynGridComponent></>
          )
    },
    { eagerness: 'hover' }
  );
*/

export const head: DocumentHead = {
  title: "Welcome to syncfusion",
  meta: [
    {
      name: "syncfusion",
      content: "syncfusion site description",
    },
  ],
};