import React from 'react';

import Layout from '../components/layout/layout.component';

const StyleGuidePage = () => {
  return (
    <Layout page="Style Guide" className="StyleGuidePage" mainTitle="Style Guide">
      <div className="wrapper">
        <div className="content-container with-padding">
          <hr />
          <h1 id="colors">Colors</h1>
          <h2>Primary (primary*)</h2>
          <div className="color-palette-container">
            <div className="color-item primary100">100</div>
            <div className="color-item primary200">200</div>
            <div className="color-item primary300">300</div>
            <div className="color-item primary400">400</div>
            <div className="color-item primary500">500</div>
            <div className="color-item primary600">600</div>
          </div>
          <h2>Chrome (chrome*)</h2>
          <div className="color-palette-container">
            <div className="color-item chrome100">100</div>
            <div className="color-item chrome200">200</div>
            <div className="color-item chrome300">300</div>
            <div className="color-item chrome400">400</div>
            <div className="color-item chrome500">500</div>
            <div className="color-item chrome600">600</div>
            <div className="color-item chrome700">700</div>
          </div>
          <h2>Success (success*)</h2>
          <div className="color-palette-container">
            <div className="color-item success100">100</div>
            <div className="color-item success200">200</div>
            <div className="color-item success300">300</div>
          </div>
          <h2>Error (error*)</h2>
          <div className="color-palette-container">
            <div className="color-item error100">100</div>
            <div className="color-item error200">200</div>
            <div className="color-item error300">300</div>
          </div>
          <h2>Warning (warning*)</h2>
          <div className="color-palette-container">
            <div className="color-item warning100">100</div>
            <div className="color-item warning200">200</div>
            <div className="color-item warning300">300</div>
          </div>
          <hr />
          <h1 id="headings">Headings</h1>
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h6>Heading 6</h6>
          <hr />
          <h1 id="headings-with-text">Headings with Text</h1>
          <h1>Heading 1</h1>
          <p>The quick brown fox jumps over the lazy dog.</p>
          <h2>Heading 2</h2>
          <p>The quick brown fox jumps over the lazy dog.</p>
          <h3>Heading 3</h3>
          <p>The quick brown fox jumps over the lazy dog.</p>
          <h4>Heading 4</h4>
          <p>The quick brown fox jumps over the lazy dog.</p>
          <h5>Heading 5</h5>
          <p>The quick brown fox jumps over the lazy dog.</p>
          <h6>Heading 6</h6>
          <p>The quick brown fox jumps over the lazy dog.</p>
          <hr />
          <h1 id="text-block">Block Elements</h1>
          <h2 id="paragraph">Paragraphs and Images</h2>
          <p>The quick brown fox jumps over the lazy dog</p>
          <p>
            <img
              alt="Placeholder Image and Some Alt Text"
              src="https://placehold.co/350x150/"
              title="A title element for this placeholder image."
            />
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dignissim convallis
            est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem.
          </p>
          <h2 id="blockquote">Blockquote</h2>
          <p>This is a standard paragraph.</p>
          <blockquote>This is a blockquote.</blockquote>

          <h2>Figure</h2>
          <figure>
            <img src="https://placehold.co/350/" alt="A placeholder figure image." />
            <figcaption>The figcaption element example</figcaption>
          </figure>
          <h2 id="details-summary">Details-Summary</h2>
          <details>
            <summary>The summary element example</summary>
            <p>
              The details example text. It may be styled differently based on what browser or
              operating system you are using.
            </p>
          </details>
          <hr />
          <h1 id="text-elements">Text Elements</h1>
          <p>
            The <a href="#">a element</a> and{' '}
            <a href="https://example.com" target="_blank">
              external a element
            </a>{' '}
            examples
          </p>
          <p>
            The <abbr>abbr element</abbr> and an <abbr title="Abbreviation">abbr</abbr> element with
            title examples
          </p>
          <p>
            The <acronym title="A Cowboy Ran One New York Marathon">ACRONYM</acronym> element
            example
          </p>
          <p>
            The <b>b element</b> example
          </p>
          <p>
            The <cite>cite element</cite> example
          </p>
          <p>
            The <code>code element</code> example
          </p>
          <p>
            The <data value="3967381398">data element</data> example
          </p>
          <p>
            The <del>del element</del> example
          </p>
          <p>
            The <dfn>dfn element</dfn> and <dfn title="Title text">dfn element with title</dfn>{' '}
            examples
          </p>
          <p>
            The <em>em element</em> example
          </p>
          <p>
            The <i>i element</i> example
          </p>
          <p>
            The <ins>ins element</ins> example
          </p>
          <p>
            The <kbd>kbd element</kbd> example
          </p>
          <p>
            The <mark>mark element</mark> example
          </p>
          <p>
            The <q>q element</q> example
          </p>
          <p>
            The{' '}
            <q>
              q element <q>inside</q> a q element
            </q>{' '}
            example
          </p>
          <p>
            The <s>s element</s> example
          </p>
          <p>
            The <samp>samp element</samp> example
          </p>
          <p>
            The <small>small element</small> example
          </p>
          <p>
            The <span>span element</span> example
          </p>
          <p>
            The <strong>strong element</strong> example
          </p>
          <p>
            The <sub>sub element</sub> example
          </p>
          <p>
            The <sup>sup element</sup> example
          </p>
          <p>
            The <time datetime="2005-05-15 19:00">time element</time> example
          </p>
          <p>
            The <u>u element</u> example
          </p>
          <p>
            The <var>var element</var> example
          </p>
          <hr />
          <h1 id="monospace">Monospace / Preformatted</h1>
          <p>Code block wrapped in "pre" and "code" tags</p>
          <pre
            style={{ background: `black`, color: `white`, padding: `15px`, borderRadius: `10px` }}
          >
            <code>console.log('hello-world')</code>
          </pre>
          <p>Monospace Text wrapped in "pre" tags</p>
          <pre>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dignissim convallis
              est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem.
              Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl.
            </p>
          </pre>
          <hr />
          <h1 id="list-types">List Types</h1>
          <h2 id="ordered-list">Ordered List</h2>
          <ol>
            <li>List Item 1</li>
            <li>List Item 2</li>
            <li>
              List Item 3
              <ol>
                <li>List Item 3.1</li>
                <li>
                  List Item 3.2
                  <ol>
                    <li>List Item 3.2.1</li>
                    <li>List Item 3.2.2</li>
                  </ol>
                </li>
                <li>List Item 3.3</li>
              </ol>
            </li>
            <li>List Item 4</li>
          </ol>
          <h2 id="unordered-list">Unordered List</h2>
          <ul>
            <li>List Item 1</li>
            <li>List Item 2</li>
            <li>
              List Item 3
              <ul>
                <li>List Item 3.1</li>
                <li>
                  List Item 3.2
                  <ul>
                    <li>List Item 3.2.1</li>
                    <li>List Item 3.2.2</li>
                  </ul>
                </li>
                <li>List Item 3.3</li>
              </ul>
            </li>
            <li>List Item 4</li>
          </ul>
          <h2 id="definition-list">Definition List</h2>
          <dl>
            <dt>Definition Term 1</dt>
            <dd>Definition Description 1</dd>
            <dt>Definition Term 2</dt>
            <dd>Definition Description 2</dd>
          </dl>
          <hr />
          <h1 id="tables">Tables</h1>
          <table cellspacing="0" cellpadding="0">
            <caption>This is a table caption</caption>
            <thead>
              <tr>
                <th>Table Header 1</th>
                <th>Table Header 2</th>
                <th>Table Header 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Division 1</td>
                <td>Division 2</td>
                <td>Division 3</td>
              </tr>
              <tr class="even">
                <td>Division 1</td>
                <td>Division 2</td>
                <td>Division 3</td>
              </tr>
              <tr>
                <td>Division 1</td>
                <td>Division 2</td>
                <td>Division 3</td>
              </tr>
              <tr>
                <td colspan="3">A row with a cell spanning all 3 columns</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th>Table Footer 1</th>
                <th>Table Footer 2</th>
                <th>Table Footer 3</th>
              </tr>
            </tfoot>
          </table>
          <hr />
          <h1 id="media-elements">Media</h1>
          <h2>The Audio Element:</h2>
          <audio controls>
            <source
              src="https://josephgattuso.github.io/js-projects/sound-board/sounds/applause.mp3"
              type="audio/mp3"
            />
            Your browser does not support the audio element.
          </audio>
          <h2>The Video Element:</h2>
          <p>
            Courtesy of{' '}
            <a
              href=" https://www.bigbuckbunny.org/"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              Big Buck Bunny
            </a>
          </p>
          <video controls>
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <h2>Embedded content</h2>
          <p>YouTube video (iframe):</p>
          <iframe
            src="https://www.youtube.com/embed/E8gmARGvPlI"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <hr />
          <h1 id="form-elements">Form Elements</h1>
          <p>The Fieldset:</p>
          <fieldset>
            <legend>Legend</legend>
            <p>The Form:</p>
            <form>
              <p>
                <label for="text-field">Text Field:</label>
                <br />
                <input type="text" id="text-field" />
              </p>
              <p>
                <label for="text-field-disabled">Disabled Text Field:</label>
                <br />
                <input type="text" id="text-field-disabled" disabled value="Example text" />
              </p>
              <p>
                <label for="text-field-readonly">Readonly Text Field:</label>
                <br />
                <input type="text" id="text-field-readonly" readonly value="Example Text" />
              </p>
              <p>
                <label for="text-area-disabled">Disabled Text Area:</label>
                <br />
                <textarea id="text-area-disabled" disabled>
                  Example Text
                </textarea>
              </p>
              <p>
                <label for="text-area-readonly">Readonly Text Area:</label>
                <br />
                <textarea id="text-area-readonly" readonly>
                  Example Text
                </textarea>
              </p>
              <p>
                <label for="select-element">Select Element:</label>
                <br />
                <select id="select-element">
                  <optgroup label="Option Group 1">
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                  </optgroup>
                  <optgroup label="Option Group 2">
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3" disabled>
                      Disabled Option
                    </option>
                  </optgroup>
                </select>
              </p>
              <p>
                <label for="select-element-disabled">Disabled Select Element:</label>
                <br />
                <select id="select-element-disabled" disabled>
                  <option value="1">Unselectable Option</option>
                  <option value="2">This option should not even be seen</option>
                </select>
              </p>
              <p>Radio Buttons:</p>
              <div>
                <input type="radio" id="radio-1" name="radios" value="1" checked />
                <label for="radio-1">Radio 1</label>
              </div>
              <div>
                <input type="radio" id="radio-2" name="radios" value="2" />
                <label for="radio-2">Radio 2</label>
              </div>
              <div>
                <input type="radio" id="radio-3" name="radios" value="3" />
                <label for="radio-3">Radio 3</label>
              </div>
              <div>
                <input type="radio" id="radio-4" name="radios" value="4" disabled />
                <label for="radio-4">Radio Disabled</label>
              </div>
              <p>Checkboxes:</p>
              <div>
                <input type="checkbox" id="checkbox-1" name="checkboxes" value="1" checked />
                <label for="checkbox-1">Checkbox 1</label>
              </div>
              <div>
                <input type="checkbox" id="checkbox-2" name="checkboxes" value="2" />
                <label for="checkbox-2">Checkbox 2</label>
              </div>
              <div>
                <input type="checkbox" id="checkbox-3" name="checkboxes" value="3" />
                <label for="checkbox-3">Checkbox 3</label>
              </div>
              <div>
                <input type="checkbox" id="checkbox-4" name="checkboxes" value="4" disabled />
                <label for="checkbox-4">Checkbox Disabled</label>
              </div>

              <h3>HTML5-specific Form Elements</h3>
              <p>
                <label for="email">Email:</label>
                <br />
                <input type="email" id="email" />
              </p>
              <p>
                <label for="url">URL:</label>
                <br />
                <input type="url" id="url" />
              </p>
              <p>
                <label for="tel">Telephone:</label>
                <br />
                <input type="tel" id="tel" />
              </p>
              <p>
                <label for="number">Number:</label>
                <br />
                <input type="number" id="number" min="0" max="10" step="1" value="5" />
              </p>
              <p>
                <label for="search">Search:</label>
                <br />
                <input type="search" id="search" />
              </p>
              <p>
                <label for="date">Date:</label>
                <br />
                <input type="date" id="date" />
              </p>
              <p>
                <label for="time">Time:</label>
                <br />
                <input type="time" id="time" />
              </p>
              <p>
                <label for="color">Color:</label>
                <br />
                <input type="color" id="color" />
              </p>
              <p>
                <label for="datalist">Datalist:</label>
                <br />
                <input list="browsers" name="browser" type="datalist" id="datalist" />
                <datalist id="browsers">
                  <option value="Internet Explorer" />
                  <option value="Firefox" />
                  <option value="Chrome" />
                  <option value="Opera" />
                  <option value="Safari" />
                </datalist>
              </p>
              <p>
                <label for="range">Range:</label>
                <br />
                <input type="range" id="range" name="points" min="1" max="10" />
              </p>
              <p>
                <label for="output">Output:</label>
                <br />
                <output name="result" id="output">
                  42
                </output>
              </p>
              <p>
                <label for="progress">Progress:</label>
                <br />
                <progress id="progress" value="65" max="100"></progress>
              </p>
              <p>
                <label for="meter">Meter:</label>
                <br />
                <meter id="meter" min="200" max="500" value="350">
                  350 degrees
                </meter>
              </p>
              <p>
                <button type="button">Button Element</button>
              </p>
            </form>
          </fieldset>
        </div>
      </div>
    </Layout>
  );
};

export default StyleGuidePage;
