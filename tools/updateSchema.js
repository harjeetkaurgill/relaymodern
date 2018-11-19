/**
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only.  Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import fs from 'fs';
import path from 'path';
import 'isomorphic-fetch';
import {
  buildClientSchema,
  introspectionQuery,
  printSchema,
} from 'graphql/utilities';

import { GAPI_PATH } from '../config/development';

fetch(GAPI_PATH, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ query: introspectionQuery }),
})
  .then(res => res.json())
  .then(res => {
    const schemaString = printSchema(buildClientSchema(res.data));
    fs.writeFileSync(
      path.join(__dirname, '../data/schema.graphql'),
      schemaString,
    );
    fs.writeFileSync(
      path.join(__dirname, '../data/schema.json'),
      JSON.stringify(res, null, 2),
    );
  });
