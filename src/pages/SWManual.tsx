import React from 'react';
import ContentSection from '../components/ContentSection';

const SWManual: React.FC = () => {
  return (
    <>
      <h1>Optogenetics Safety and Usage Guide</h1>

      <ContentSection
        title="SAFETY CONSIDERATIONS"
        content={
          <>
            <p>The optogenetics setup uses a 12-24V power supply. Before touching any part of the circuit board or wires, make sure that the power supply is off and unplugged.</p>
            <p>Do not touch the LEDs or wires while the system is plugged into the power supply.</p>
            <p>Avoid staring directly at the LED lights while they are on.</p>
          </>
        }
      />

      <ContentSection
        title="Starting the Program"
        content={
          <>
            <p>Make sure the camera is connected to the USB port.</p>
            <p>Ensure the IR and LED lights are plugged into the board, but do not connect the power yet.</p>
            <p>Launch FlyRig.exe and close the tab on the right side of the screen by clicking the X (red circle below).</p>
          </>
        }
      />

      <ContentSection
        title="Setting Up the Camera"
        content={
          <>
            <p>Click on Camera Options. It should give you a window that looks like this:</p>
            <ul>
              <li>Select the USB camera under the Source tab.</li>
              <li>Set the Framerate (frames per second) to 30.</li>
              <li>Set the Width and Height to desired pixels.</li>
            </ul>
            <p>You should now see a live image from your chamber in the main window.</p>
          </>
        }
      />
      </>

  );
};

export default SWManual;
