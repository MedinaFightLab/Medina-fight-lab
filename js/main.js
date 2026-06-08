// Medina Fight Lab — mobile nav toggle
(function () {
  var toggle = document.querySelector(".nav-toggle");
  var body = document.body;
  if (!toggle) return;

  toggle.addEventListener("click", function () {
    body.classList.toggle("nav-open");
    var open = body.classList.contains("nav-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // Close menu when a link is tapped
  document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
      body.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
})();

// Medina Fight Lab — Daily Encouraging Message
(function () {
  var MESSAGES = [
    "The work you put in today is the foundation someone else can only dream about.",
    "Pain is the price of admission. Champions pay it willingly.",
    "Your body remembers every rep. Train like it matters — because it does.",
    "The fight doesn't start in the ring. It starts when the alarm goes off.",
    "Discipline is just love for your future self.",
    "Iron sharpens iron. Show up and be the whetstone.",
    "Every session is a deposit. Every skip is a withdrawal. Know your balance.",
    "You don't rise to the occasion — you fall to your preparation.",
    "Fatigue is temporary. The version of yourself you're building is permanent.",
    "The best fighters in the world still do the basics. Do the basics.",
    "Healing is not weakness. Recovery is part of the work.",
    "No one sees your 5am. Your competition does.",
    "Strength isn't built in comfort. Neither is character.",
    "One more rep when it burns is where champions are forged.",
    "The body achieves what the mind believes. Train both.",
    "You're not just building a fighter — you're building a person.",
    "Progress is quiet. Keep going anyway.",
    "Today's sore muscles are tomorrow's armour.",
    "Trust the process even when the results aren't there yet.",
    "Show up with intention. The rest follows.",
    "A warrior prepares. A champion recovers. Be both.",
    "The gym floor doesn't care about your mood. Neither does your opponent.",
    "Every setback is just a different angle of attack.",
    "Hard days build the mental toughness soft days can't.",
    "Your weaknesses are just strengths you haven't built yet.",
    "Fight camps end. The habits you build last forever.",
    "The work is the reward. Everything else is a bonus.",
    "You can't pour from an empty cup — rest is not optional.",
    "Some days the win is just showing up. That counts.",
    "The athlete who recovers fastest wins. Prioritise it.",
    "Precision beats power. Consistency beats intensity.",
    "You were built for this. Act like it.",
    "Pressure either breaks pipes or makes diamonds. Your choice.",
    "Progress compounds. The reps you do today pay interest.",
    "Every fighter has a style. The great ones know exactly why.",
    "Not every day feels like a breakthrough. Not every breakthrough feels like one.",
    "Grit is the gap between motivation and discipline. Fill it.",
    "Your opponent is also tired. Who trained harder?",
    "Science doesn't care about excuses. Neither should your program.",
    "The best training partners push you without breaking you. Be that person.",
    "Injury is information, not a full stop.",
    "A good coach sees what the athlete can't. Trust the process.",
    "The body is the weapon. Sharpen it daily.",
    "You don't need to be fearless. You need to move despite the fear.",
    "The mat doesn't lie. Neither does the barbell.",
    "Every rep is a vote for the athlete you're becoming.",
    "Small consistent wins beat sporadic heroics every time.",
    "Your ceiling is higher than you think. Prove it today.",
    "Rest is not retreat. It's strategy.",
    "The fight is 3 minutes. The prep is 3 months. Respect both.",
    "Energy systems don't lie — train yours like it's your livelihood.",
    "Mental toughness is a skill. It's trained, not born.",
    "What you do when no one is watching determines everything.",
    "The best version of you is already in there. Chase it.",
    "Control what you can. Attack what you can't.",
    "Champions are made in the moments you want to quit and don't.",
    "Mobility today is durability tomorrow.",
    "Every elite athlete you admire was once exactly where you are.",
    "Hard training easy fight. Easy training hard fight.",
    "You are the sum of your habits. Build good ones, ruthlessly.",
    "The body adapts to what you consistently demand of it. Demand more.",
    "Breathe. Reset. Go again.",
    "Your comeback starts the same way your first win did — one session at a time.",
    "Don't just train to compete. Train to last.",
  ];

  function getDayOfYear() {
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = now - start;
    var oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
  }

  function getTodayKey() {
    var now = new Date();
    return "mfl_msg_" + now.getFullYear() + "_" + getDayOfYear();
  }

  function getTodayMessage() {
    var day = getDayOfYear();
    return MESSAGES[day % MESSAGES.length];
  }

  function createToast(msg) {
    var toast = document.createElement("div");
    toast.className = "mfl-toast";
    toast.innerHTML =
      '<button class="mfl-toast-close" aria-label="Close">&times;</button>' +
      '<div class="mfl-toast-label">Daily Message</div>' +
      '<div class="mfl-toast-msg">' + msg + '</div>';
    document.body.appendChild(toast);

    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        toast.classList.add("show");
      });
    });

    toast.querySelector(".mfl-toast-close").addEventListener("click", function () {
      toast.classList.remove("show");
      setTimeout(function () { toast.remove(); }, 350);
    });

    // Auto-dismiss after 8 seconds
    setTimeout(function () {
      toast.classList.remove("show");
      setTimeout(function () { if (toast.parentNode) toast.remove(); }, 350);
    }, 8000);
  }

  function init() {
    var bell = document.getElementById("navBell");
    var badge = document.getElementById("navBellBadge");
    if (!bell || !badge) return;

    var todayKey = getTodayKey();
    var seen = localStorage.getItem(todayKey);

    if (!seen) {
      badge.classList.add("visible");
    }

    bell.addEventListener("click", function () {
      badge.classList.remove("visible");
      localStorage.setItem(todayKey, "1");
      createToast(getTodayMessage());
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
