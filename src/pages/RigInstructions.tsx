import React from 'react';

const RigInstructions: React.FC = () => {
  return <>
  <h1>Building Your Own Optogenetics FlyRig</h1>
  
  <h2>Introduction</h2>
  <p>The Optogenetics FlyRig is a system designed for conducting optogenetic behavioral experiments with fruit flies. Created by Eric Hoopfer and Aaron Heidgerken-Greene at Carleton College, it aims to provide a cost-effective and straightforward solution with minimal technical expertise.</p>
  <p>This is an unpublished beta version still under development. Your feedback on any bugs, improvements, or modifications would be greatly appreciated. Although designed for secondary school and undergraduate teaching labs, the system can be adapted for research purposes.</p>
  <p>Current versions of parts files, software code, and instruction manuals are located in the <code>CarletonFlyRig</code> folder.</p>
  
  <h2>The System</h2>
  <p>The FlyRig system consists of three main components: the photostimulation rig, circuit board, and CarletonFlyRig software. The software is most stable in a Windows environment but can also run on Macs.</p>

  <h2>Assembling the Photostimulation Rig</h2>
  
  <h3>Laser Cut Parts and Assemble Apparatus</h3>
  <p>The following parts should be cut on a laser cutter. DFX files are in the <code>CarletonFlyRig/Hardware/Laser_cut_parts/DXF_files</code> folder.</p>
  
  <table>
      <thead>
          <tr>
              <th>Part</th>
              <th>Quantity</th>
              <th>Material</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>frontPanel1</td>
              <td>1</td>
              <td>¼” wood project board</td>
          </tr>
          <tr>
              <td>backPanel</td>
              <td>1</td>
              <td>¼” wood project board</td>
          </tr>
          <tr>
              <td>sidePanels</td>
              <td>2</td>
              <td>¼” wood project board</td>
          </tr>
          <tr>
              <td>topBottom</td>
              <td>2</td>
              <td>¼” wood project board</td>
          </tr>
          <tr>
              <td>lockPin</td>
              <td>3-6</td>
              <td>¼” wood project board</td>
          </tr>
          <tr>
              <td>ledInsert2</td>
              <td>1</td>
              <td>1/8” acrylic</td>
          </tr>
          <tr>
              <td>arenaInsert</td>
              <td>1</td>
              <td>1/8” white Delrin</td>
          </tr>
          <tr>
              <td>cameraInsert</td>
              <td>1</td>
              <td>1/8” acrylic or Delrin</td>
          </tr>
      </tbody>
  </table>

  <div>
      <strong>Note 1:</strong> Wood parts can be printed from acrylic or Delrin for easier cleaning. The material should be 0.2” thick to fit into the slots. Autodesk Fusion 360 or STEP files are available for design modifications.
  </div>

  <div>
      <strong>Note 2:</strong> The ledInsert can be made from aluminum to provide a greater heat sink for high-powered LEDs, although heat dissipation has not been an issue with most pulsed light stimulation protocols.
  </div>
  
  <h3>Assemble the Structure</h3>
  <ol>
      <li>Assemble the top and bottom panels into the side panels.</li>
      <li>Assemble the front and back panels.</li>
      <li>Join the panels at T-slots using ½” 4-40 screws and square nuts or glue them together.</li>
      <li>Screw the camera into the cameraInsert plate and attach an IR filter to the camera lens with glue.</li>
      <li>Adjust the distance between the LED, chamber, and camera plates as needed. Insert the plates into the shelves and secure them with the lock pins.</li>
  </ol>

  <h3>Assemble LED Plate</h3>
  <p>Attach the LEDs as per the following steps:</p>
  <ul>
      <li>Affix three 20cm IR LED strips along the etched lines on the plate.</li>
      <li>Place thermal stickers on the four squares in the center for 10mm LEDs. The high-powered LEDs will be connected in series.</li>
      <li>Affix LEDs with constant pressure for 30 seconds to the thermal stickers.</li>
  </ul>

  <div>
      <strong>Attention!</strong> Ensure that high-powered LEDs are placed so the positive pad of one faces the negative pad of the next one.
  </div>

  <h3>Wire the LEDs</h3>
  <ul>
      <li>Connect IR LED strips in parallel: positive to positive and negative to negative.</li>
      <li>Solder wires (2' lengths of red and black) from the IR1 strip to the circuit board.</li>
      <li>Connect high-powered LEDs in series and solder wires from LED1 to LED4 as shown in the instructions.</li>
      <li>Attach female connectors to the wires.</li>
  </ul>

  <h2>Assemble the Circuit Board</h2>
  <ol>
      <li>Solder pins into the Adafruit Quad DAC board and Metro Mini board.</li>
      <li>Insert header connectors into the circuit board and solder them.</li>
      <li>Solder remaining components (except the LED driver) and trim excess pins.</li>
      <li>Solder the LED driver to the board.</li>
  </ol>

  <h3>Load Arduino Code</h3>
  <ol>
      <li>Connect the Arduino Metro Mini to the computer.</li>
      <li>Download the Arduino software and open <code>lightController.ino</code>.</li>
      <li>Select the correct port and upload the code.</li>
      <li>Install the Silicone Labs COM port driver if needed and update it in the Device Manager.</li>
      <li>Restart your computer.</li>
  </ol>

  <p><strong>Note:</strong> If the wrong port is selected, an error may occur. Try a different port if necessary.</p>

  <h2>Assemble the System</h2>
  <ol>
      <li>Connect the camera and Adafruit Metro Mini to the computer.</li>
      <li>Plug the LED light into the board and connect the power supply.</li>
      <li>Launch the FlyRig software.</li>
  </ol>
  
  <p><strong>Note:</strong> If the power supply is connected but the Metro Mini board is not, the LEDs will remain on at full intensity.</p>
</>
};

export default RigInstructions;
