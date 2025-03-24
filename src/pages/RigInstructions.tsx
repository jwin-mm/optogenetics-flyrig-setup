import React from 'react';
import ContentSection from '../components/ContentSection';

const imageBasePath = "/optogenetics-flyrig-setup/images/RigInstructions/";

const RigImage = ({ src, alt, maxWidth = 'lg', className = '' }) => (
  <img
    src={`${imageBasePath}${src}`}
    alt={alt}
    className={`w-full max-w-${maxWidth} mx-auto shadow-md ${className}`}
  />
);

const RigInstructions: React.FC = () => {
  return (
    <>
      {/* Main title with tightened leading */}
      <p className="text-5xl font-bold text-center mb-30 mt-50% pb-10 pt-20 leading-tight flex ml-38">
        Building Your Own <br /> Optogenetics FlyRig
      </p>

      {/* Introduction Section */}
      <ContentSection
        title="Introduction"
        content={
          <>
            <p className="mb-4 text-gray-300">
              The Optogenetics FlyRig is a system to do optogenetic behavioral experiments with fruit flies. The system was designed by Eric Hoopfer and Aaron Heidgerken-Greene at Carleton College. The goal of this system is to provide a simple and flexible system that can be implemented with minimal cost and technical expertise.
            </p>
            <p className="mb-4 text-gray-300">
              This is an unpublished beta version of this system that is still in development. I am happy to share it with you at this early stage and would value any feedback you have on bugs, improvements, modifications, etc. The system was designed to be used in secondary school and undergraduate teaching labs but is adaptable for research use.
            </p>
            <p className="mb-30 text-gray-300">
              Current versions of parts files, software code, and instruction manuals are located in the <code className="bg-gray-800 px-1 rounded">CarletonFlyRig</code> folder.
            </p>
          </>
        }
      />

      {/* The System Section */}
      <ContentSection
        title="The System"
        content={
          <>
            <p className="mb-8 text-gray-300">
              The FlyRig system has three main components: the photostimulation rig, circuit board, and CarletonFlyRig software. The software runs most stably in a Windows environment, although it can be run on Macs.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <RigImage src="image1.png" alt="Fly Rig Video Control Logo" className="mb-10"/>
              <RigImage src="image2.png" alt="Fly Rig Video Control Logo" maxWidth="md" className="mt-10"/>
              <RigImage src="image3.png" alt="Fly Rig Video Control Logo" maxWidth="xl" 
              className="col-span-5 object-cover mb-30"
              />
            </div>
          </>
        }
      />

      {/* Assemble the Photostimulation Rig Section */}
      <ContentSection
        title="Assemble the Photostimulation Rig"
        content={
          <>
            <h3 className="text-xl font-semibold mb-4 text-gray-300">Laser Cut Parts and Assemble Apparatus</h3>
            <p className="mb-15 text-gray-300">
              The following parts should be cut on a laser cutter. DFX files are in the <code className="bg-gray-800 px-1 rounded">CarletonFlyRig/Hardware/Laser_cut_parts/DXF_files</code> folder.
            </p>
            <table className="table-auto w-full border-collapse border border-gray-300 my-4">
              <thead>
                <tr className="bg-gray-700">
                  <th className="border border-gray-300 px-4 py-2 text-left text-gray-300">Part</th>
                  <th className="border border-gray-300 px-4 py-2 text-left text-gray-300">Quantity</th>
                  <th className="border border-gray-300 px-4 py-2 text-left text-gray-300">Material</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { part: "frontPanel1", quantity: "1", material: "¼” wood project board" },
                  { part: "backPanel", quantity: "1", material: "¼” wood project board" },
                  { part: "sidePanels", quantity: "2", material: "¼” wood project board" },
                  { part: "topBottom", quantity: "2", material: "¼” wood project board" },
                  { part: "lockPin", quantity: "3-6", material: "¼” wood project board" },
                  { part: "ledInsert2", quantity: "1", material: "1/8” acrylic" },
                  { part: "arenaInsert", quantity: "1", material: "1/8” white Delrin" },
                  { part: "cameraInsert", quantity: "1", material: "1/8” acrylic or Delrin" },
                ].map((row, idx) => (
                  <tr key={idx} className="even:bg-gray-800 hover:bg-gray-700">
                    <td className="border border-gray-300 px-4 py-2 text-gray-300">{row.part}</td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-300">{row.quantity}</td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-300">{row.material}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="grid grid-cols-8 gap-4 mb-30">
              <RigImage
                src="image4.png"
                alt="Fly Rig Diagram"
                maxWidth="lg"
                className="col-span-9 row-span-2 my-4 ml-40"
              />
              <div className="col-span-4 pt-10 mb-4">
                <p className="text-blue-300">
                  <strong>Note 1:</strong> Wood parts can be printed from acrylic or Delrin to aid in cleaning. If so, the material should be 0.2” thick to fit in the slots. Autodesk Fusion 360 or STEP files are available so that designs can be modified.
                </p>
              </div>
              <div className="col-span-4 mb-4">
                <p className="text-blue-300 mt-10 ">
                  <strong>Note 2:</strong> The ledInsert can also be manufactured from aluminum to provide a greater heat sink for high-powered LEDs. However, we’ve found that heat dissipation from LEDs has not been an issue with most stimulation protocols that use pulsed light.
                </p>
              </div>
            </div>
          </>
        }
      />

      {/* Assemble the Structure Section */}
      <ContentSection
        title="Assemble the Structure"
        content={
          <ol className="list-decimal pl-8 space-y-4 text-gray-300 mt-10">
            <div className="gap-4">
              <li className="pb-2">
                Assemble the top and bottom panels into the side panels.
              </li>
              <li className="pb-2">Assemble the front and back panels.</li>
              <li className="pb-2">
                The panels can be joined at T-slots using ½” 4-40 screws and square nuts or glued together.
              </li>
              <RigImage
                src="image5.png"
                alt="Fly Rig Assembly Diagram"
                maxWidth="xl"
                className="col-span-3 row-span-3 my-4"
              />
            </div>
            <div className="gap-4">
            <li className="pb-2">Screw camera into cameraInsert plate.</li>
              <li className="pb-2">
                Cut a piece of IR filter to match the size of the camera lens and affix it to the lens with glue.
              </li>
              <li className="pb-2">
                The rig is designed to allow flexibility in the distance between the LED, chamber, and camera plates. Insert the plates in the shelves and use the lock pin to keep the plates in place.
              </li>
              
              <RigImage
                src="image6.png"
                alt="Camera Assembly"
                maxWidth="lg"
                className="col-span-3 row-span-3"
              />
            </div>
          </ol>
        }
      />

      {/* Assemble LED Plate Section */}
      <ContentSection
        title="Assemble LED Plate"
        content={
          <>
            <p className="mb-8 text-gray-300">Attach LEDs to the plate</p>
            <ol className="list-decimal pl-6 space-y-4 text-gray-300">
              <RigImage src="image7.png" alt="LED Plate Diagram" className="w-72" />
              <li className='mt-16'>
                The LED plate is etched with three lines to guide the placement of the IR LED strips and squares where high-powered LEDs can be placed.
              </li>
              <li>
                Cut three 20cm IR LED strips and affix them along the lines on the plate. Only cut the LED strips in the middle of the solder pads.
              </li>
              <li>
                Affix the thermal stickers for the 10mm LEDs on the four squares in the center of the plate. Optionally, you can drive up to 8 LEDs with one circuit board. Circuit boards are available that allow independent control of 4 sets of LEDs, allowing for light control in different areas or multiple wavelengths of LEDs to be used.
              </li>
              <li>
                Affix the LEDs to the thermal stickers using constant pressure on the base of the LED for about 30 sec.
              </li>
            </ol>
            <div className="mt-10">
              <p className="text-yellow-300">
                <strong>Attention!</strong> The high-powered LEDs will be connected in series. Place them so that the positive pad of one faces the negative pad of the next one, as shown below.
              </p>
              <RigImage src="image8.png" alt="LED Connection Diagram" className="w-72 mb-30 mt-16" />
            </div>
          </>
        }
      />

      {/* Wire the LEDs Section */}
      <ContentSection
        title="Wire the LEDs"
        content={
          <ol className="list-decimal pl-6 space-y-4 text-gray-300">
            <li>Connect the IR LED strips in parallel.</li>
            <li>Connect positive to positive and negative to negative as shown below.</li>
            <li>
              Cut 2’ lengths of wire (red and black) to run from IR strips to the circuit board and solder to pads on the IR1 strip. Solder the red wire to the positive pad and the black wire to the negative pad.
            </li>
            <li>Connect the high-powered LEDs in series.</li>
            <li>
              Beginning with LED1, connect its positive pad to the negative pad of LED2 with a piece of wire. Repeat with LED2 to LED3 and LED3 to LED4.
            </li>
            <li>
              Cut 2’ lengths of wire to run from LED strips to the circuit board. Solder the black wire to the negative pad on LED1 and the red wire to the positive pad on LED4.
            </li>
            <li>
              Attach female connectors to wires.
              <ol className="list-decimal pl-6 space-y-4">
                <li>Solder each wire onto the wire crimps.</li>
                <li>
                  The high-powered LED wires should be connected to the 2-pin connector and the IR LED wires should be connected to the 3-pin connector.
                </li>
                <li>
                  Insert the wires into the connectors as shown below.
                  <RigImage className='mb-30' src="image9.png" alt="Connector Diagram" />
                </li>
              </ol>
            </li>
          </ol>
        }
      />

      {/* Assemble the Circuit Board Section */}
      <ContentSection
        title="Assemble the Circuit Board"
        content={
          <ol className="list-decimal pl-6 space-y-4 text-gray-300">
            <li>
              Solder pins into the Adafruit Quad DAC board and Metro Mini board.
              <ol className="list-decimal pl-6 space-y-4">
                <li>Cut down the pin strip to 6 pins (as shown).</li>
                <li>Insert the short end into the bottom of the board.</li>
                <li>
                  Flip the board over so it faces up and solder the pins to the top of the board.
                </li>
                <RigImage src="image10.png" alt="Pin Soldering Diagram" maxWidth="2xl" />
              </ol>
            </li>
            <li>
              Solder pins into the Adafruit Metro Mini board.
              <ol className="list-decimal pl-6 space-y-4">
                <li>Cut down the pins strip to 14 pins.</li>
                <li>Repeat the same procedure that you used for the DAC board.</li>
              </ol>
            </li>
            <li>
              Solder the header connectors to the circuit board.
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  <p className="text-blue-300">
                    <strong>Note:</strong> It is easiest to first connect the header connectors to the two Adafruit boards and then insert the pins of the connectors into the board. This ensures that header pins are correctly aligned and makes soldering easier.
                  </p>
                </li>
                <li>
                  Insert two rows of header connectors into the corresponding board slots on the Metro Mini and DAC board spaces on the circuit board.
                </li>
                <li>Lightly tape down the components to the top of the board to hold them in place.</li>
                <li>Flip the board over and solder the pins to the bottom of the board.</li>
                <li>Trim the excess pins with the wire cutters.</li>
                <RigImage src="image11.png" alt="Header Connector Diagram" maxWidth="xl" />
              </ol>
            </li>
            <li>
              Solder the remaining components into the board as shown below except for the LED driver.
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  <p className="text-blue-300">
                    <strong>Note:</strong> The long wire of the indicator LED is the positive terminal. This should go into the upper slot on the board.
                  </p>
                </li>
                <RigImage src="image12.png" alt="Component Soldering Diagram" />
              </ol>
            </li>
            <li>
              Lastly, solder the LED driver to the board.
              <RigImage className='mb-30' src="image13.png" alt="LED Driver Diagram" maxWidth="md" />
            </li>
          </ol>
        }
      />

      {/* Load Arduino Code Section */}
      <ContentSection
        title="Load Arduino Code"
        content={
          <ol className="list-decimal pl-6 space-y-4 text-gray-300">
            <li>Connect the Arduino Metro Mini board to the computer with the Micro USB cable.</li>
            <li>Download Arduino software.</li>
            <li>
              Open the lightController.ino file in Arduino. Located in the <code className="bg-gray-800 px-1 rounded">CarletonFlyRig/Software/21-023 FlyRig/lightController</code> folder.
            </li>
            <li>Select the correct port for the board: Tools &gt; Port.</li>
            <li>Verify the code by clicking on the “check” button in the upper left corner.</li>
            <li>Upload the code by clicking on the “→” button in the upper left corner.</li>
            <li>Download and install Silicone Labs COM port driver.</li>
            <li>
              Open the Device Manager, click “Update driver” on the Silicone Labs device, and browse to the unpacked zip folder that was downloaded.
            </li>
            <li>Restart your computer</li>
            <li>
              <p className="text-blue-300">
                <strong>Note:</strong> The most common error you will encounter is if the wrong port was selected for the board. Select a different port and try uploading again.
              </p>
            </li>
            <li className='mb-30'>Your board is now ready to use!</li>
          </ol>
        }
      />

      {/* Assemble the System Section */}
      <ContentSection
        title="Assemble the System"
        content={
          <>
            <ol className="list-decimal pl-6 space-y-4 text-gray-300">
              <li>Connect the camera to the computer.</li>
              <li>Connect the Adafruit Metro Mini to the computer (if not already connected).</li>
              <li>Plug the LED light into the board.</li>
              <li>Connect the power supply.</li>
              <li>Launch the FlyRig software.</li>
            </ol>
            <p className="mt-4 text-blue-300">
              <strong>Note:</strong> If the power supply is connected but the Metro Mini board is not, the LEDs will remain on at full intensity.
            </p>
          </>
        }
      />
    </>
  );
};

export default RigInstructions;