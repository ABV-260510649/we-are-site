const textList = ["Nursing", "Optometry", "Chiropractic", "Law (Juris Doctorate)",
"Epidemiology", "Occupational Therapy", "Nurse Practitioner","Pharmacy", "Graduate", "Physician's Assistant", "Medical", "Veterinary"];

const percentList = ["100%", "100%", "100%", "100%", "100%", "100%", "100%","98%","93%","92%","90%","90%"];

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
setInterval(cycleText, 3000);


