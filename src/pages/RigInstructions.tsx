import React from 'react';
import ContentSection from '../components/ContentSection';
import './css/RigInstructions.css'

const imageBasePath = "/optogenetics-flyrig-setup/src/assets/images/RigInstructions/"

const RigInstructions: React.FC = () => {
  return (
    <>
      <h1>Building Your Own Optogenetics FlyRig</h1>

      <ContentSection
        title="Introduction"
        content={
          <>
            <p>The Optogenetics FlyRig is a system to do optogenetic behavioral experiments with fruit flies. The system was designed by Eric Hoopfer and Aaron Heidgerken-Greene at Carleton College. The goal of this system is to provide a simple and flexible system that can be implemented with minimal cost and technical expertise.</p>
            <p>This is an unpublished beta version of this system that is still in development. I am happy to share it with you at this early stage and would value any feedback you have on bugs, improvements, modifications, etc. The system was designed to be used in secondary school and undergraduate teaching labs but is adaptable for research use.             </p>
            <p>Current versions of parts files, software code, and instruction manuals are located in the CarletonFlyRig folder.</p>
          </>
        }
      />

      <ContentSection
        title="The System"
        content={
          <>
            <p>The FlyRig system has three main components: the photostimulation rig, circuit board, and CarletonFlyRig software. The software runs most stably in a Windows environment, although it can be run on Macs.</p>
            <img src={imageBasePath + "image1.png"} style={{ width: "500px"}} alt='Fly Rig Video Control Logo'></img>
            <img src={imageBasePath + "image2.png"} style={{ width: "300px"}} alt='Fly Rig Video Control Logo'></img>
            <img src={imageBasePath + "image3.png"} style={{ width: "600px"}} alt='Fly Rig Video Control Logo'></img>    
          </>
        }
      />

      <ContentSection
        title="Assemble the Photostimulation Rig"
        content={
          <>
            <h3>Laser Cut Parts and Assemble Apparatus</h3>
            <p>The following parts should be cut on a laser cutter. DFX files are in the <code>CarletonFlyRig/Hardware/Laser_cut_parts/DXF_files</code> folder.</p>
            <table className="parts-table">
              <thead>
                <tr>
                  <th>Part</th>
                  <th>Quantity</th>
                  <th>Material</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>frontPanel1</td><td>1</td><td>¼” wood project board</td></tr>
                <tr><td>backPanel</td><td>1</td><td>¼” wood project board</td></tr>
                <tr><td>sidePanels</td><td>2</td><td>¼” wood project board</td></tr>
                <tr><td>topBottom</td><td>2</td><td>¼” wood project board</td></tr>
                <tr><td>lockPin</td><td>3-6</td><td>¼” wood project board</td></tr>
                <tr><td>ledInsert2</td><td>1</td><td>1/8” acrylic</td></tr>
                <tr><td>arenaInsert</td><td>1</td><td>1/8” white Delrin</td></tr>
                <tr><td>cameraInsert</td><td>1</td><td>1/8” acrylic or Delrin</td></tr>
              </tbody>
            </table>
            <img src={imageBasePath + "image4.png"} style={{ width: "400px"}} alt='Fly Rig Video Control Logo'></img>    
            <div>
              <strong>Note 1:</strong> Wood parts can be printed from acrylic or Delrin to aid in cleaning. If so, the material should be 0.2” thick to fit in the slots. Autodesk Fusion 360 or STEP files are available so that designs can be modified.
            </div>
            <div>
              <strong>Note 2:</strong> The ledInsert can also be manufactured from aluminum to provide a greater heat sink for high-powered LEDs. However, we’ve found that heat dissipation from LEDs has not been an issue with most stimulation protocols that use pulsed light.
            </div>
          </>
        }
      />

      <ContentSection
        title="Assemble the Structure"
        content={
          <ol>
            <li>Assemble the top and bottom panels into the side panels.</li>
            <li>Assemble the front and back panels.</li>
            <li>The panels can be joined at T-slots using ½” 4-40 screws and square nuts or glued together.</li>
            <img src={imageBasePath + "image5.png"} style={{ width: "800px"}} alt='Fly Rig Video Control Logo'></img>    
            <li>Screw camera into cameraInsert plate.</li>
            <img src={imageBasePath + "image6.png"} alt='Fly Rig Video Control Logo'></img>    
            <li>Cut a piece of IR filter to match the size of the camera lens and affix it to the lens with glue.</li>
            <li>The rig is designed to allow flexibility in the distance between the LED, chamber, and cameral plates. Insert the plates in the shelves and use the lock pin to keep the plates in place. </li>
          </ol>
        }
      />

      <ContentSection
        title="Assemble LED Plate"
        content={
          <>
            <p>Attach LEDs to the plate</p>
            <ol>
              <img src={imageBasePath + "image7.png"} style={{ width: "300px"}} alt='Fly Rig Video Control Logo'></img>    
              <li>The LED plate is etched with three lines to guide the placement of the IR LED strips and squares where high-powered LEDs can be placed.</li>
              <li>Cut three 20cm IR LED strips and affix them along the lines on the plate. Only cut the LED strips in the middle of the solder pads.              </li>
              <li>Affix the thermal stickers for the 10mm LEDs on the four squares in the center of the plate. Optionally, you can drive up to 8 LEDs with one circuit board. Circuit boards are available that allow independent control of 4 sets of LEDs, allowing for light control in different areas or multiple wavelengths of LEDs to be used.</li>
              <li>Affix the LEDs to the thermal stickers using constant pressure on the base of the LED for about 30 sec. </li>
            </ol>
            <div>
              <strong>Attention!</strong> The high-powered LEDs will be connected in series. Place them so that the positive pad of one faces the negative pad of the next one, as shown below.
              <img src={imageBasePath + "image8.png"} style={{ width: "300px"}} alt='Fly Rig Video Control Logo'></img>    
            </div>
          </>
        }
      />

      <ContentSection
        title="Wire the LEDs"
        content={
          <ol>
            <li>Connect the IR LED strips in parallel.</li>
            <li>Connect positive to positive and negative to negative as shown below.</li>
            <li>Cut 2’ lengths of wire (red and black) to run from IR strips to the circuit board and solder to pads on the IR1 strip. Solder the red wire to the positive pad and the black wire to the negative pad.</li>
            <li>Connect the high-powered LEDs in series.</li>
            <li>Beginning with LED1, connect its positive pad to the negative pad of LED2 with a piece of wire. Repeat with LED2 to LED3 and LED3 to LED4.</li>
            <li>Cut 2’ lengths of wire to run from LED strips to the circuit board. Solder the black wire to the negative pad on LED1 and the red wire to the positive pad on LED4.</li>
            <li>Attach female connectors to wires.
              <ol>
                <li>Solder each wire onto the wire crimps.</li>
                <li>The high-powered LED wires should be connected to the 2-pin connector and the IR LED wires should be connected to the 3-pin connector.</li>
                <li>Insert the wires into the connectors as shown below.</li>
              </ol>
            </li>
            <img src={imageBasePath + "image9.png"} alt='Fly Rig Video Control Logo'></img>    
          </ol>
        }
      />

      <ContentSection
        title="Assemble the Circuit Board"
        content={
          <ol>
            <li>Solder pins into the Adafruit Quad DAC board and Metro Mini board.
              <ol>
                <li>Cut down the pin strip to 6 pins (as shown).</li>
                <li>Insert the short end into the bottom of the board.</li>
                <li>Flip the board over so it faces up and solder the pins to the top of the board.</li>
              <img src={imageBasePath + "image10.png"} style={{ width: "600px"}} alt='Fly Rig Video Control Logo'></img>    
              </ol>
            </li>
            <li>Solder pins into the Adafruit Metro mini board.
              <ol>
                <li>Cut down the pins strip to 14 pins.</li>
                <li>Repeat the same procedure that you used for the DAC board.</li>
              </ol>
            </li>
            <li>Solder the header connectors to the circuit board.
              <ol>
                <li><strong>Note:</strong> It is easiest to first connect the header connectors to the two Adafruit boards and then insert the pins of the connectors into the board. This ensures that header pins are correctly aligned and makes soldering easier.</li>
                <li>Insert two rows of header connectors into the corresponding board slots on the Metro Mini and DAC board spaces on the circuit board.</li>
                <li>Lightly tape down the components to the top of the board to hold them in place.</li>
                <li>Flip the board over and solder the pins to the bottom of the board.</li>
                <li>Trim the excess pins with the wire cutters.</li>
                <img src={imageBasePath + "image11.png"} style={{ width: "500px"}} alt='Fly Rig Video Control Logo'></img>    
              </ol>
            </li>
            <li>Solder the remaining components into the board as shown below except for the LED driver.
              <ol>
                <li><strong>Note:</strong> The long wire of the indicator LED is the positive terminal. This should go into the upper slot on the board.</li>
                <img src={imageBasePath + "image12.png"} style={{ width: "400px"}} alt='Fly Rig Video Control Logo'></img>    
              </ol>
            </li>
            <li>Lastly, solder the LED driver to the board.</li>
            <img src={imageBasePath + "image13.png"} style={{ width: "300px"}} alt='Fly Rig Video Control Logo'></img>    
          </ol>
        }
      />

      <ContentSection
        title="Load Arduino Code"
        content={
          <ol>
            <li>Connect the Arduino Metro Mini board to the computer with the Micro USB cable.</li>
            <li>Download Arduino software.</li>
            <li>Open the lightController.ino file in Arduino. Located in the CarletonFlyRig/Software/21-023 FlyRig/lightController folder.</li>
            <li>Select the correct port for the board: Tools&gt;Port.</li>
            <li>Verify the code by clicking on the “check” button in the upper left corner.</li>
            <li> Upload the code by clicking on the “→” button in the upper left corner.</li>
            <li>Download and install Silicone Labs COM port driver.</li>
            <li>Open the Device Manager, click “Update driver” on the Silicone Labs device, and browse to the unpacked zip folder that was downloaded.</li>
            <li>Restart your computer</li>
            <strong>Note:</strong> The most common error you will encounter is if the wrong port was selected for the board. Select a different port and try uploading again.
            <li>Your board is now ready to use!</li>
          </ol>
        }
      />

      <ContentSection
        title="Assemble the System"
        content={
          <>
            <ol>
              <li>Connect the camera to the computer.</li>
              <li>Connect the Adafruit Metro Mini to the computer (if not already connected).</li>
              <li>Plug the LED light into the board.</li>
              <li>Connect the power supply.</li>
              <li>Launch the FlyRig software.</li>
            </ol>
            <strong>Note:</strong> If the power supply is connected but the Metro Mini board is not, the LEDs will remain on at full intensity.
          </>
        }
      />

    </>
  );
};

export default RigInstructions;
