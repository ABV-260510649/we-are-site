const textList = ["Nursing", "Pharmacy", "Chiropractic", "Law (Juris Doctorate)", "Physician's Assistant ",
"Occupational Therapy", "Medical", "Optometry","Graduate", "Epidemiology", "Nurse Practitioner", "Veterinary"];

const percentList = ["100%", "98%", "100%", "100%", "92%", "100%", "90%","100%","93%","100%","100%","90%"];

const cycle = document.querySelector("#cycle");
const percent = document.querySelector("#percentCycle");
i = 0;
j = 0;

const cycleText = () => {
  cycle.innerHTML = textList[i];
  i = ++i % textList.length;

  percent.innerHTML = percentList[j];
  j = ++j % percentList.length;
};
cycleText();
setInterval(cycleText, 2000);


