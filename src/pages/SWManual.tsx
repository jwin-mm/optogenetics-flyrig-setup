import React from 'react';
import ContentSection from '../components/ContentSection';
import './css/SWManual.css'

const imageBasePath = "/optogenetics-flyrig-setup/images/SWManual/"

const SWManual: React.FC = () => {
  return (
    <> <div
          className="p-1 rounded-4xl mx-auto my-15 w-full max-w-lg md:max-w-md lg:max-w-lg"
          style={{ backgroundColor: "#0b5091" }}
        >
        <img
          src={imageBasePath + "image1.png"}
          className="pt-3"
          alt="Fly Rig Video Control Logo"
        />
      </div>
      
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
            <ol>
              <li>Make sure the camera is connected to the USB port.</li>
              <li>Ensure the IR and LED lights are plugged into the board, but do not connect the power yet.</li>
              <li>Launch FlyRig.exe.</li>
              <li>Close the tab on the right side of the screen by clicking the X (red circle below).</li>
            </ol>
            <img src={imageBasePath + "image2.png"} style={{ width: "500px", margin: "40px"}} alt='Fly Rig Video Control Logo'></img>
          </>
        }
      />

      <ContentSection
        title="Setting Up the Camera"
        content={
            <ol>
              <li>Click on Camera Options. It should give you a window that looks like this:</li>
              <img src={imageBasePath + "image3.png"} style={{ width: "300px", margin: "40px"}} alt='Fly Rig Video Control Logo'></img>
              <li>Select the USB camera under the Source tab.</li>
              <li>Set the Framerate (frames per second) to 30.</li>
              <li>Set the Width and Height to desired pixels.</li>
              <li>You should now see a live image from your chamber in the main window.</li>
            </ol>
        }
      />

      <ContentSection
        title="Turning on the Backlight"
        content={
          <ol>
            <li>Click on the Manual Control tab.</li>
            <img src={imageBasePath + "image4.png"} style={{ width: "300px", margin: "40px"}} alt='Fly Rig Video Control Logo'></img>
            <li>
              The Backlight slider allows you to set the intensity of the backlight (from 0 - 100%). Click on the slider to set it to an intensity—start out around 50%. The background of the image should brighten. You won’t be able to see the light coming from the backlight because it is in the infrared wavelength (IR), which we and the flies can’t see.
            </li>
          </ol>
        }
      />

      <ContentSection
        title="Making a video recording"
        content={
          <ol>
            <li>To specify the length of your video, click on the Recording Options tab.</li>
            <img src={imageBasePath + "image5.png"} style={{ width: "300px", margin: "40px"}} alt='Fly Rig Video Control Logo'></img>
            <li>Set the Time (in seconds) of your recording.</li>
            <li>Set the name of your video in File Base Name. The video filename will start with this name.</li>
            <li>Specify where you want to save your video in File Base Name. It should open a browser window. Select the folder where you want to save your videos.</li>
            <li>To start your recording click the Record button. While the video is recording, you can manually control the LEDs (see Manual Control section).</li>
            <li>The videos are encoded as mp4 files.</li>
            <li>The filenames of each recording are automatically appended as follows to prevent overwriting files. Filename_Year_Month_DayTHour_Min_Sec_msecZ</li>
          </ol>
        }
      />

      <ContentSection
        title="Manual Control"
        content={
          <>
            <p>
              This tab allows you to manually control the LED lights. Changing the intensity or frequency of light that you use for optogenetic stimulation can cause a corresponding change in the activity of the neurons you’re activating.
            </p>
            <p>You can set the following parameters of stimulation:</p>
            <ul>
              <li>Frequency of stimulation (Hz): adjusts the frequency of pulses per sec.</li>
              <li>Amplitude (%): adjusts the intensity of light from 0 to 100% max intensity</li>
              <li>Pulse length (ms): this is the duration of each pulse.</li>
              <li>Time (sec): this is the duration of the stimulation (how long you stimulate)</li>
              <li>Quadrants: Which set of LEDs to activate.</li>
              <div style={{ display: "flex", gap: "20px", justifyContent: "center", margin: "40px 0" }}>
                <img src={imageBasePath + "image6.png"} style={{ backgroundColor: "white", width: "900px" }} alt='Fly Rig Video Control Logo'></img>
                <img src={imageBasePath + "image7.png"} style={{ width: "300px" }} alt='Fly Rig Video Control Logo'></img>
              </div>
            </ul>
          </>
        }
      />

      <ContentSection
        title="Option 1: Instant control of the light"
        content={
          <ol>
            <li>Clicking on the Momentary button will turn on the light. This is useful for giving instantaneous stimulations.</li>
            <li>Set the Frequency, Amplitude, Pulse length.</li>
            <li>Select the proper Quadrants to activate. If the board has only one LED driver, click on the leftmost box.</li>
            <li>Set the Time (seconds) of the stimulation.</li>
            <li>Click on the Momentary button (while recording or not) to deliver the light. Hold down the button as long as you want to deliver light.</li>
          </ol>
        }
      />

      <ContentSection
        title="Option 2: Set duration of light stimulation"
        content={
          <>
            <p>This is useful for repeating the same stimulation.</p>
            <ol>
              <li>Set the Frequency, Amplitude, Pulse length, and Quantrants.</li>
              <li>Set the Time (seconds) of the stimulation.</li>
              <li>The light will start as soon as you click on the Set button. This can be done at any time, including during a recording.</li>
              <li>To turn off the light in the middle of a stimulation click on the Off button.</li>
            </ol>
          </>
        }
      />

      <ContentSection
        title="Auto Control"
        content={
          <>
            <p>This setting allows you to pre-program a set of light stimulations and experimental metadata. This can be useful if you want to give repeated stimulation protocols during several experiments.</p>
            <ol>
              <img src={imageBasePath + "image8.png"} style={{width: "300px", wordWrap: "break-word", margin: "40px" }} alt='Fly Rig Video Control Logo'></img>
              <li>Click on the Auto Control tab.</li>
              <li>Each Cue is a separate “time period” during your experiment. You can either set the light to ON or OFF during these periods.</li>
              <li>To get you started, you can load an example CSV file that will pre-load some Cues into the program.</li>
              <li>To do so, click on Choose File.</li>
              <li>You'll find a file called “exampleCuesAndMetadata_class.csv” on the desktop of the computer.</li>
              <li>This file will load an experiment that does the following:</li>
              <ul>
                <li>Cue 1: No light for 30 seconds (Time 0 - 30 sec)</li>
                <li>Cue 2: 30 Hz light at 50% intensity for 30 seconds (Time 30 - 60 sec)</li>
                <li>Cue 3: 30 seconds of no light (Time 60 - 90 sec)</li>
                <li>Cue 4: 30 Hz light at 50% intensity for 30 seconds (Time 90 - 120 sec)</li>
              </ul>
              <li>You can Add, Edit or Delete Cues.</li>
              <li>Add and Edit will give you this window.</li>
              <img src={imageBasePath + "image9.png"} style={{ width: "350px", margin: "40px"}} alt='Fly Rig Video Control Logo'></img>
              <li>The Start Time indicates when during the recording (i.e., elapsed time) the cue should start. Make sure it doesn’t overlap with other cues.</li>
              <li>Once you have your Cues set, you will want to specify the file path and name of your recording (Recording Options tab).</li>
              <li>Clicking on the Run button of the Auto Control tab will start a recording and the light stimulation experiment you programmed into Auto Control.</li>
            </ol>
          </>
        }
      />

      </>

  );
};

export default SWManual;
