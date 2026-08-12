(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  const { useState, useEffect, useMemo, useRef } = React;
  async function storageGet(key) {
    try {
      const v = localStorage.getItem(key);
      return v !== null ? { key, value: v, shared: false } : null;
    } catch (e) {
      return null;
    }
  }
  async function storageSet(key, value) {
    try {
      localStorage.setItem(key, value);
      return { key, value, shared: false };
    } catch (e) {
      return null;
    }
  }
  function makeIcon(symbol) {
    return function Icon({ size = 14, className = "" }) {
      return React.createElement(
        "span",
        { className, style: { fontSize: size, lineHeight: 1, display: "inline-block" } },
        symbol
      );
    };
  }
  const Plus = makeIcon("+");
  const Search = makeIcon("\u{1F50D}");
  const Phone = makeIcon("\u{1F4DE}");
  const Mail = makeIcon("\u2709\uFE0F");
  const Cake = makeIcon("\u{1F382}");
  const X = makeIcon("\u2715");
  const Pencil = makeIcon("\u270F\uFE0F");
  const Trash2 = makeIcon("\u{1F5D1}\uFE0F");
  const TrendingUp = makeIcon("\u{1F4C8}");
  const Wallet = makeIcon("\u{1F45B}");
  const AlertCircle = makeIcon("\u26A0\uFE0F");
  const Ban = makeIcon("\u{1F6AB}");
  const ChevronDown = makeIcon("\u25BE");
  const ChevronRight = makeIcon("\u25B8");
  const Shield = makeIcon("\u{1F6E1}\uFE0F");
  const Users = makeIcon("\u{1F465}");
  const FileText = makeIcon("\u{1F4DD}");
  const Download = makeIcon("\u2B07\uFE0F");
  const Upload = makeIcon("\u2B06\uFE0F");
  const Calendar = makeIcon("\u{1F4C5}");
  const Banknote = makeIcon("\u{1F4B5}");
  const Check = makeIcon("\u2714\uFE0F");
  const ListTodo = makeIcon("\u{1F4CB}");
  const PartyPopper = makeIcon("\u{1F389}");
  const STAGES = [
    { key: "\u540D\u55AE", label: "\u540D\u55AE", tone: "bg-slate-400", text: "text-slate-700", bgSoft: "bg-slate-100", ring: "ring-slate-300" },
    { key: "\u806F\u7E6B", label: "\u806F\u7E6B", tone: "bg-sky-400", text: "text-sky-700", bgSoft: "bg-sky-100", ring: "ring-sky-300" },
    { key: "\u5831\u50F9", label: "\u5831\u50F9", tone: "bg-violet-400", text: "text-violet-700", bgSoft: "bg-violet-100", ring: "ring-violet-300" },
    { key: "\u8B70\u50F9", label: "\u8B70\u50F9", tone: "bg-amber-400", text: "text-amber-700", bgSoft: "bg-amber-100", ring: "ring-amber-300" },
    { key: "\u6210\u4EA4", label: "\u6210\u4EA4", tone: "bg-emerald-500", text: "text-emerald-700", bgSoft: "bg-emerald-100", ring: "ring-emerald-300" }
  ];
  const TIERS = [
    { key: "A", label: "A \u9AD8\u50F9\u503C/\u9AD8\u6F5B\u529B", bg: "bg-rose-100", text: "text-rose-700" },
    { key: "B", label: "B \u4E2D\u7B49\u50F9\u503C", bg: "bg-sky-100", text: "text-sky-700" },
    { key: "C", label: "C \u4F4E\u512A\u5148\u7D1A/\u9577\u671F\u57F9\u990A", bg: "bg-stone-200", text: "text-stone-500" }
  ];
  const DISC_TYPES = [
    { key: "D", label: "D \u652F\u914D\u578B" },
    { key: "I", label: "I \u5F71\u97FF\u578B" },
    { key: "S", label: "S \u7A69\u5065\u578B" },
    { key: "C", label: "C \u8B39\u614E\u578B" }
  ];
  const TAIWAN_CITIES = [
    "\u53F0\u5317\u5E02",
    "\u65B0\u5317\u5E02",
    "\u6843\u5712\u5E02",
    "\u53F0\u4E2D\u5E02",
    "\u53F0\u5357\u5E02",
    "\u9AD8\u96C4\u5E02",
    "\u57FA\u9686\u5E02",
    "\u65B0\u7AF9\u5E02",
    "\u65B0\u7AF9\u7E23",
    "\u82D7\u6817\u7E23",
    "\u5F70\u5316\u7E23",
    "\u5357\u6295\u7E23",
    "\u96F2\u6797\u7E23",
    "\u5609\u7FA9\u5E02",
    "\u5609\u7FA9\u7E23",
    "\u5C4F\u6771\u7E23",
    "\u5B9C\u862D\u7E23",
    "\u82B1\u84EE\u7E23",
    "\u53F0\u6771\u7E23",
    "\u6F8E\u6E56\u7E23",
    "\u91D1\u9580\u7E23",
    "\u9023\u6C5F\u7E23"
  ];
  const CATEGORIES = ["\u58FD\u96AA", "\u7522\u96AA"];
  const PAY_FREQ = ["\u5E74\u7E73", "\u534A\u5E74\u7E73", "\u5B63\u7E73", "\u6708\u7E73", "\u8E89\u7E73"];
  const BILLING_STATUS = [
    { key: "\u672A\u8ACB\u6B3E", bg: "bg-stone-100", text: "text-stone-500" },
    { key: "\u5DF2\u8ACB\u6B3E\u5F85\u6536", bg: "bg-amber-100", text: "text-amber-700" },
    { key: "\u5DF2\u6536\u6B3E", bg: "bg-emerald-100", text: "text-emerald-700" }
  ];
  const OCCUPATION_CLASSES = ["\u7B2C1\u985E", "\u7B2C2\u985E", "\u7B2C3\u985E", "\u7B2C4\u985E", "\u7B2C5\u985E", "\u7B2C6\u985E"];
  const emptyCustomer = { name: "", company: "", occupation: "", contact: "", email: "", lineId: "", birthday: "", tier: "", note: "", lastActivity: "", lastActivityDate: "", nextFollowUp: "", referredBy: "", idNumber: "", addressCity: "", addressStreet: "", discType: "", policyGap: "", licensePlate: "", occupationClass: "", emergencyContactName: "", emergencyContactPhone: "", visits: [] };
  const emptyPolicy = {
    category: "\u58FD\u96AA",
    type: "",
    company: "",
    insured: "",
    insuredAmount: "",
    premium: "",
    payFreq: "\u5E74\u7E73",
    effectiveDate: "",
    nextDueDate: "",
    paymentDate: "",
    beneficiary: "",
    stage: "\u540D\u55AE",
    commission: "",
    lost: false,
    billingStatus: "\u672A\u8ACB\u6B3E",
    invoiceDate: "",
    attachmentName: "",
    attachmentData: "",
    nextDuePaidFor: "",
    nextDuePaidDate: "",
    paymentPaidFor: "",
    paymentPaidDate: ""
  };
  function uid() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  }
  function todayStr() {
    return (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  }
  function currency(n) {
    return (Number(n) || 0).toLocaleString("zh-TW");
  }
  function daysUntil(dateStr) {
    const today = new Date(todayStr());
    const d = new Date(dateStr);
    return Math.round((d - today) / 864e5);
  }
  function dueTone(dateStr, lost, thresholdDays = 30) {
    if (lost || !dateStr) return { label: dateStr || "\u2014", cls: "text-stone-400" };
    const diff = daysUntil(dateStr);
    if (diff < 0) return { label: `\u5DF2\u903E\u671F \xB7 ${dateStr}`, cls: "text-rose-600 font-medium" };
    if (diff <= thresholdDays) return { label: `${diff === 0 ? "\u4ECA\u5929" : `${diff}\u5929\u5F8C`} \xB7 ${dateStr}`, cls: "text-amber-600 font-medium" };
    return { label: dateStr, cls: "text-stone-600" };
  }
  function expiryThresholdOf(category) {
    return category === "\u7522\u96AA" ? 30 : 365;
  }
  function customerAlert(c) {
    let minDiff = null;
    let overdue = false;
    (c.policies || []).filter((p) => !p.lost).forEach((p) => {
      if (p.nextDueDate) {
        const d = daysUntil(p.nextDueDate);
        if (d <= expiryThresholdOf(p.category)) {
          if (minDiff === null || d < minDiff) minDiff = d;
          if (d < 0) overdue = true;
        }
      }
      if (p.category === "\u58FD\u96AA" && p.paymentDate) {
        const d2 = daysUntil(p.paymentDate);
        if (d2 <= 30) {
          if (minDiff === null || d2 < minDiff) minDiff = d2;
          if (d2 < 0) overdue = true;
        }
      }
    });
    return minDiff === null ? null : { diff: minDiff, overdue };
  }
  function nextBirthday(bday) {
    if (!bday) return null;
    const today = new Date(todayStr());
    const b = new Date(bday);
    let next = new Date(today.getFullYear(), b.getMonth(), b.getDate());
    if (next < today) next = new Date(today.getFullYear() + 1, b.getMonth(), b.getDate());
    return { date: next, diff: Math.round((next - today) / 864e5) };
  }
  function nextAnniversary(effectiveDate) {
    if (!effectiveDate) return null;
    const today = new Date(todayStr());
    const e = new Date(effectiveDate);
    let next = new Date(today.getFullYear(), e.getMonth(), e.getDate());
    if (next < today) next = new Date(today.getFullYear() + 1, e.getMonth(), e.getDate());
    const years = next.getFullYear() - e.getFullYear();
    return { date: next, diff: Math.round((next - today) / 864e5), years };
  }
  function primaryStageOf(policies) {
    const active = (policies || []).filter((p) => !p.lost);
    if (active.length === 0) return null;
    let best = active[0].stage;
    active.forEach((p) => {
      if (STAGES.findIndex((s) => s.key === p.stage) > STAGES.findIndex((s) => s.key === best)) best = p.stage;
    });
    return best;
  }
  function customerAnniversary(c) {
    let best = null;
    (c.policies || []).filter((p) => !p.lost && p.effectiveDate).forEach((p) => {
      const na = nextAnniversary(p.effectiveDate);
      if (na && na.diff <= 30 && (!best || na.diff < best.diff)) best = __spreadProps(__spreadValues({}, na), { type: p.type });
    });
    return best;
  }
  function initialsOf(name) {
    if (!name) return "?";
    return name.trim().slice(0, 2);
  }
  function InsuranceTracker() {
    const [customers, setCustomers] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [expanded, setExpanded] = useState({});
    const [query, setQuery] = useState("");
    const [stageFilter, setStageFilter] = useState([]);
    const [categoryFilter, setCategoryFilter] = useState([]);
    const [tierFilter, setTierFilter] = useState([]);
    const [cityFilter, setCityFilter] = useState("");
    const [dealMonth, setDealMonth] = useState("");
    const [saveErr, setSaveErr] = useState("");
    const [showExportMenu, setShowExportMenu] = useState(false);
    const fileInputRef = useRef(null);
    const [quickEditId, setQuickEditId] = useState(null);
    const [quickForm, setQuickForm] = useState({ lastActivity: "", lastActivityDate: "", nextFollowUp: "" });
    const [visitFormCustId, setVisitFormCustId] = useState(null);
    const [visitDraft, setVisitDraft] = useState({ date: todayStr(), note: "" });
    const [showCustForm, setShowCustForm] = useState(false);
    const [custForm, setCustForm] = useState(emptyCustomer);
    const [editingCustId, setEditingCustId] = useState(null);
    const [showPolForm, setShowPolForm] = useState(false);
    const [polForm, setPolForm] = useState(emptyPolicy);
    const [polCustId, setPolCustId] = useState(null);
    const [editingPolId, setEditingPolId] = useState(null);
    useEffect(() => {
      (async () => {
        try {
          const res = await storageGet("insurance_customers", false);
          if (res && res.value) setCustomers(JSON.parse(res.value));
        } catch (e) {
        } finally {
          setLoaded(true);
        }
      })();
    }, []);
    useEffect(() => {
      if (!loaded) return;
      (async () => {
        try {
          await storageSet("insurance_customers", JSON.stringify(customers), false);
          setSaveErr("");
        } catch (e) {
          setSaveErr("\u5132\u5B58\u5931\u6557,\u8ACB\u78BA\u8A8D\u7DB2\u8DEF\u5F8C\u518D\u8A66\u4E00\u6B21");
        }
      })();
    }, [customers, loaded]);
    const overdueItems = useMemo(() => {
      const items = [];
      customers.forEach((c) => {
        (c.policies || []).filter((p) => !p.lost).forEach((p) => {
          if (p.nextDueDate && daysUntil(p.nextDueDate) < 0 && p.nextDuePaidFor !== p.nextDueDate) {
            items.push({ custId: c.id, custName: c.name, custContact: c.contact, custLineId: c.lineId, polId: p.id, type: p.type, dateLabel: "\u5230\u671F\u65E5", dateType: "nextDue", date: p.nextDueDate, diff: daysUntil(p.nextDueDate) });
          }
          if (p.category === "\u58FD\u96AA" && p.paymentDate && daysUntil(p.paymentDate) < 0 && p.paymentPaidFor !== p.paymentDate) {
            items.push({ custId: c.id, custName: c.name, custContact: c.contact, custLineId: c.lineId, polId: p.id, type: p.type, dateLabel: "\u7E73\u8CBB\u65E5", dateType: "payment", date: p.paymentDate, diff: daysUntil(p.paymentDate) });
          }
          if (p.billingStatus === "\u5DF2\u8ACB\u6B3E\u5F85\u6536" && p.invoiceDate && daysUntil(p.invoiceDate) <= -14) {
            const waited = Math.abs(daysUntil(p.invoiceDate));
            items.push({ custId: c.id, custName: c.name, custContact: c.contact, custLineId: c.lineId, polId: p.id, type: p.type, dateLabel: "\u8ACB\u6B3E", date: p.invoiceDate, diff: -waited, label: `\u8ACB\u6B3E\u5DF2 ${waited} \u5929\u672A\u6536\u6B3E` });
          }
          if (p.stage === "\u6210\u4EA4" && p.billingStatus === "\u672A\u8ACB\u6B3E" && p.effectiveDate && daysUntil(p.effectiveDate) <= -30) {
            const waited = Math.abs(daysUntil(p.effectiveDate));
            items.push({ custId: c.id, custName: c.name, custContact: c.contact, custLineId: c.lineId, polId: p.id, type: p.type, dateLabel: "\u8ACB\u6B3E", date: p.effectiveDate, diff: -waited, label: `\u6210\u4EA4\u5DF2 ${waited} \u5929\u5C1A\u672A\u8ACB\u6B3E` });
          }
        });
        if (c.nextFollowUp && daysUntil(c.nextFollowUp) < 0) {
          items.push({ custId: c.id, custName: c.name, custContact: c.contact, custLineId: c.lineId, type: "\u8DDF\u9032\u63D0\u9192", dateLabel: "\u4E0B\u6B21\u8FFD\u8E64\u65E5", date: c.nextFollowUp, diff: daysUntil(c.nextFollowUp) });
        }
      });
      return items.sort((a, b) => a.diff - b.diff);
    }, [customers]);
    const todayItems = useMemo(() => {
      const items = [];
      customers.forEach((c) => {
        if (c.nextFollowUp && daysUntil(c.nextFollowUp) === 0) {
          items.push({ custId: c.id, custName: c.name, label: "\u4ECA\u65E5\u5F85\u8FFD\u8E64" });
        }
        const nb = nextBirthday(c.birthday);
        if (nb && nb.diff === 0) {
          items.push({ custId: c.id, custName: c.name, label: "\u4ECA\u5929\u751F\u65E5" });
        }
        (c.policies || []).filter((p) => !p.lost).forEach((p) => {
          if (p.nextDueDate && daysUntil(p.nextDueDate) === 0) {
            items.push({ custId: c.id, custName: c.name, label: `${p.type} \u5230\u671F\u65E5\u5C31\u662F\u4ECA\u5929` });
          }
          if (p.category === "\u58FD\u96AA" && p.paymentDate && daysUntil(p.paymentDate) === 0) {
            items.push({ custId: c.id, custName: c.name, label: `${p.type} \u7E73\u8CBB\u65E5\u5C31\u662F\u4ECA\u5929` });
          }
          const anv = nextAnniversary(p.effectiveDate);
          if (anv && anv.diff === 0) {
            items.push({ custId: c.id, custName: c.name, label: `${p.type} \u4FDD\u55AE\u9031\u5E74\u6176(\u9069\u5408\u95DC\u5FC3/\u52A0\u4FDD)` });
          }
        });
      });
      return items;
    }, [customers]);
    function jumpToCustomer(custId) {
      setExpanded((e) => __spreadProps(__spreadValues({}, e), { [custId]: true }));
      setTimeout(() => {
        const el = document.getElementById(`cust-${custId}`);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 50);
    }
    function toggleFilter(setter, current, key) {
      if (key === "\u5168\u90E8") {
        setter([]);
        return;
      }
      setter(current.includes(key) ? current.filter((k) => k !== key) : [...current, key]);
    }
    const filteredCustomers = useMemo(() => {
      return customers.map((c) => {
        let policies = c.policies || [];
        if (stageFilter.length > 0) {
          policies = policies.filter((p) => stageFilter.includes("\u5DF2\u6D41\u5931") && p.lost || !p.lost && stageFilter.includes(p.stage));
        }
        if (categoryFilter.length > 0) {
          policies = policies.filter((p) => categoryFilter.includes(p.category));
        }
        return __spreadProps(__spreadValues({}, c), { policies });
      }).filter((c) => {
        if (tierFilter.length > 0 && !tierFilter.includes(c.tier)) return false;
        if (cityFilter && c.addressCity !== cityFilter) return false;
        if (dealMonth) {
          const hasDeal = (c.policies || []).some((p) => !p.lost && p.stage === "\u6210\u4EA4" && p.effectiveDate && p.effectiveDate.slice(0, 7) === dealMonth);
          if (!hasDeal) return false;
        }
        if (query.trim()) {
          const q = query.trim().toLowerCase();
          const hay = `${c.name} ${c.company} ${c.occupation} ${c.contact} ${c.email} ${c.lineId} ${c.note} ${c.referredBy} ${c.idNumber} ${c.addressCity} ${c.addressStreet} ${c.licensePlate} ${c.emergencyContactName} ${(c.policies || []).map((p) => `${p.type} ${p.company}`).join(" ")}`.toLowerCase();
          if (!hay.includes(q)) return false;
        }
        if ((stageFilter.length > 0 || categoryFilter.length > 0) && c.policies.length === 0) return false;
        return true;
      }).sort((a, b) => {
        const nbA = nextBirthday(a.birthday);
        const nbB = nextBirthday(b.birthday);
        const nfA = a.nextFollowUp ? daysUntil(a.nextFollowUp) : 9999;
        const nfB = b.nextFollowUp ? daysUntil(b.nextFollowUp) : 9999;
        const dueA = Math.min(...(a.policies || []).filter((p) => !p.lost && (p.nextDueDate || p.paymentDate)).map((p) => [p.nextDueDate, p.paymentDate].filter(Boolean).map(daysUntil)).reduce((acc, arr) => acc.concat(arr), []), nbA ? nbA.diff : 9999, nfA, 9999);
        const dueB = Math.min(...(b.policies || []).filter((p) => !p.lost && (p.nextDueDate || p.paymentDate)).map((p) => [p.nextDueDate, p.paymentDate].filter(Boolean).map(daysUntil)).reduce((acc, arr) => acc.concat(arr), []), nbB ? nbB.diff : 9999, nfB, 9999);
        return dueA - dueB;
      });
    }, [customers, query, stageFilter, categoryFilter, tierFilter, cityFilter, dealMonth]);
    const stats = useMemo(() => {
      const visiblePolicies = [];
      filteredCustomers.forEach((c) => (c.policies || []).forEach((p) => visiblePolicies.push(p)));
      const active = visiblePolicies.filter((p) => !p.lost);
      const won = active.filter((p) => p.stage === "\u6210\u4EA4");
      const totalPremium = active.reduce((s, p) => s + (Number(p.premium) || 0), 0);
      const commission = won.reduce((s, p) => s + (Number(p.commission) || 0), 0);
      const received = won.filter((p) => p.billingStatus === "\u5DF2\u6536\u6B3E").reduce((s, p) => s + (Number(p.commission) || 0), 0);
      const earlyStage = active.filter((p) => p.stage === "\u540D\u55AE" || p.stage === "\u806F\u7E6B").length;
      const quoting = active.filter((p) => p.stage === "\u5831\u50F9" || p.stage === "\u8B70\u50F9").length;
      return { totalCustomers: filteredCustomers.length, totalPremium, commission, received, earlyStage, quoting, won: won.length };
    }, [filteredCustomers]);
    const funnelData = useMemo(() => {
      const visiblePolicies = [];
      filteredCustomers.forEach((c) => (c.policies || []).forEach((p) => visiblePolicies.push(p)));
      const active = visiblePolicies.filter((p) => !p.lost);
      return STAGES.map((s) => {
        const inStage = active.filter((p) => p.stage === s.key);
        const premiumSum = inStage.reduce((sum, p) => sum + (Number(p.premium) || 0), 0);
        const receivedSum = s.key === "\u6210\u4EA4" ? inStage.filter((p) => p.billingStatus === "\u5DF2\u6536\u6B3E").reduce((sum, p) => sum + (Number(p.commission) || 0), 0) : null;
        return { count: inStage.length, premiumSum, receivedSum };
      });
    }, [filteredCustomers]);
    const funnelMax = Math.max(1, ...funnelData.map((f) => f.count));
    const referralStats = useMemo(() => {
      const counts = {};
      customers.forEach((c) => {
        if (c.referredBy && c.referredBy.trim()) {
          const key = c.referredBy.trim();
          counts[key] = (counts[key] || 0) + 1;
        }
      });
      return Object.entries(counts).map(([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count).slice(0, 5);
    }, [customers]);
    function toggleExpand(id) {
      setExpanded((e) => __spreadProps(__spreadValues({}, e), { [id]: !e[id] }));
    }
    function openAddCustomer() {
      setCustForm(emptyCustomer);
      setEditingCustId(null);
      setShowCustForm(true);
    }
    function openEditCustomer(c) {
      setCustForm(__spreadValues(__spreadValues({}, emptyCustomer), c));
      setEditingCustId(c.id);
      setShowCustForm(true);
    }
    function submitCustomer(e) {
      e.preventDefault();
      if (!custForm.name.trim()) return;
      if (editingCustId) {
        setCustomers((cs) => cs.map((c) => c.id === editingCustId ? __spreadValues(__spreadValues({}, c), custForm) : c));
      } else {
        const id = uid();
        setCustomers((cs) => [...cs, __spreadProps(__spreadValues({}, custForm), { id, policies: [], createdAt: todayStr() })]);
        setExpanded((e2) => __spreadProps(__spreadValues({}, e2), { [id]: true }));
      }
      setShowCustForm(false);
    }
    function removeCustomer(id) {
      setCustomers((cs) => cs.filter((c) => c.id !== id));
    }
    function confirmRemoveCustomer(c) {
      const policyCount = (c.policies || []).length;
      const msg = policyCount > 0 ? `\u78BA\u5B9A\u8981\u522A\u9664\u5BA2\u6236\u300C${c.name}\u300D\u55CE?

\u9019\u6703\u540C\u6642\u522A\u9664\u4ED6\u5E95\u4E0B ${policyCount} \u5F35\u4FDD\u55AE\u8CC7\u6599,\u6B64\u52D5\u4F5C\u7121\u6CD5\u5FA9\u539F\u3002` : `\u78BA\u5B9A\u8981\u522A\u9664\u5BA2\u6236\u300C${c.name}\u300D\u55CE?\u6B64\u52D5\u4F5C\u7121\u6CD5\u5FA9\u539F\u3002`;
      if (window.confirm(msg)) removeCustomer(c.id);
    }
    function openQuickEdit(c) {
      setQuickEditId(c.id);
      setQuickForm({ lastActivity: c.lastActivity || "", lastActivityDate: c.lastActivityDate || todayStr(), nextFollowUp: c.nextFollowUp || "" });
    }
    function saveQuickEdit(custId) {
      setCustomers((cs) => cs.map((c) => c.id === custId ? __spreadValues(__spreadValues({}, c), quickForm) : c));
      setQuickEditId(null);
    }
    function openAddVisit(custId) {
      setVisitFormCustId(custId);
      setVisitDraft({ date: todayStr(), note: "" });
    }
    function saveVisit(custId) {
      if (!visitDraft.note.trim()) return;
      setCustomers((cs) => cs.map((c) => c.id === custId ? __spreadProps(__spreadValues({}, c), { visits: [...c.visits || [], { id: uid(), date: visitDraft.date, note: visitDraft.note }] }) : c));
      setVisitFormCustId(null);
    }
    function removeVisit(custId, visitId) {
      setCustomers((cs) => cs.map((c) => c.id === custId ? __spreadProps(__spreadValues({}, c), { visits: (c.visits || []).filter((v) => v.id !== visitId) }) : c));
    }
    function openAddPolicy(custId) {
      setPolForm(emptyPolicy);
      setPolCustId(custId);
      setEditingPolId(null);
      setShowPolForm(true);
    }
    function openEditPolicy(custId, p) {
      setPolForm(__spreadValues({}, p));
      setPolCustId(custId);
      setEditingPolId(p.id);
      setShowPolForm(true);
    }
    function submitPolicy(e) {
      e.preventDefault();
      if (!polForm.type.trim()) return;
      setCustomers((cs) => cs.map((c) => {
        if (c.id !== polCustId) return c;
        let policies = c.policies || [];
        if (editingPolId) {
          policies = policies.map((p) => p.id === editingPolId ? __spreadProps(__spreadValues({}, polForm), { id: editingPolId }) : p);
        } else {
          policies = [...policies, __spreadProps(__spreadValues({}, polForm), { id: uid() })];
        }
        return __spreadProps(__spreadValues({}, c), { policies });
      }));
      setShowPolForm(false);
    }
    function handlePolicyAttachment(e) {
      const file = e.target.files[0];
      if (!file) return;
      if (file.type !== "application/pdf") {
        setSaveErr("\u53EA\u80FD\u4E0A\u50B3 PDF \u6A94\u6848");
        e.target.value = "";
        return;
      }
      if (file.size > 3 * 1024 * 1024) {
        setSaveErr("PDF \u6A94\u6848\u592A\u5927(\u8D85\u904E3MB),\u8ACB\u58D3\u7E2E\u5F8C\u518D\u4E0A\u50B3,\u907F\u514D\u8CC7\u6599\u5B58\u4E0D\u4E0B");
        e.target.value = "";
        return;
      }
      const reader = new FileReader();
      reader.onload = (ev) => {
        setPolForm((f) => __spreadProps(__spreadValues({}, f), { attachmentName: file.name, attachmentData: ev.target.result }));
        setSaveErr("");
      };
      reader.readAsDataURL(file);
      e.target.value = "";
    }
    function removePolicyAttachment() {
      setPolForm((f) => __spreadProps(__spreadValues({}, f), { attachmentName: "", attachmentData: "" }));
    }
    function removePolicy(custId, polId) {
      setCustomers((cs) => cs.map((c) => c.id === custId ? __spreadProps(__spreadValues({}, c), { policies: (c.policies || []).filter((p) => p.id !== polId) }) : c));
    }
    function confirmRemovePolicy(custId, p) {
      if (window.confirm(`\u78BA\u5B9A\u8981\u522A\u9664\u9019\u5F35\u4FDD\u55AE\u55CE?

${p.type}${p.company ? "(" + p.company + ")" : ""}
\u6B64\u52D5\u4F5C\u7121\u6CD5\u5FA9\u539F\u3002`)) {
        removePolicy(custId, p.id);
      }
    }
    function quickStageChange(custId, polId, stage) {
      setCustomers((cs) => cs.map((c) => c.id === custId ? __spreadProps(__spreadValues({}, c), { policies: c.policies.map((p) => p.id === polId ? __spreadProps(__spreadValues({}, p), { stage, lost: false }) : p) }) : c));
    }
    function togglePolicyLost(custId, polId) {
      setCustomers((cs) => cs.map((c) => c.id === custId ? __spreadProps(__spreadValues({}, c), { policies: c.policies.map((p) => p.id === polId ? __spreadProps(__spreadValues({}, p), { lost: !p.lost }) : p) }) : c));
    }
    function quickBillingChange(custId, polId, billingStatus) {
      setCustomers((cs) => cs.map((c) => c.id === custId ? __spreadProps(__spreadValues({}, c), { policies: c.policies.map((p) => p.id === polId ? __spreadProps(__spreadValues({}, p), { billingStatus }) : p) }) : c));
    }
    function markPolicyPaid(custId, polId, dateType) {
      const today = todayStr();
      setCustomers((cs) => cs.map((c) => c.id === custId ? __spreadProps(__spreadValues({}, c), { policies: c.policies.map((p) => {
        if (p.id !== polId) return p;
        if (dateType === "nextDue") return __spreadProps(__spreadValues({}, p), { nextDuePaidFor: p.nextDueDate, nextDuePaidDate: today });
        if (dateType === "payment") return __spreadProps(__spreadValues({}, p), { paymentPaidFor: p.paymentDate, paymentPaidDate: today });
        return p;
      }) }) : c));
    }
    function downloadBlob(content, filename, mime) {
      const blob = new Blob([content], { type: mime });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      a.click();
      URL.revokeObjectURL(url);
    }
    function handleExportJSON() {
      try {
        downloadBlob(JSON.stringify(customers, null, 2), `\u4FDD\u96AA\u5BA2\u6236\u8CC7\u6599_${todayStr()}.json`, "application/json");
      } catch (e) {
        setSaveErr("\u532F\u51FA\u5931\u6557");
      }
      setShowExportMenu(false);
    }
    function csvEscape(v) {
      const s = v === null || v === void 0 ? "" : String(v);
      if (s.includes(",") || s.includes('"') || s.includes("\n")) {
        return '"' + s.replace(/"/g, '""') + '"';
      }
      return s;
    }
    function handleExportExcel() {
      try {
        const headers = ["\u5BA2\u6236\u59D3\u540D", "\u516C\u53F8", "\u8077\u696D", "\u8077\u696D\u7B49\u7D1A", "\u96FB\u8A71", "LINE ID", "\u7DCA\u6025\u806F\u7D61\u4EBA", "\u7DCA\u6025\u806F\u7D61\u4EBA\u96FB\u8A71", "\u8ECA\u724C", "Email", "\u5BA2\u6236\u5206\u7D1A", "\u7E23\u5E02", "\u5730\u5740", "\u4ECB\u7D39\u4EBA", "\u96AA\u7A2E", "\u4FDD\u96AA\u516C\u53F8", "\u4FDD\u984D", "\u4FDD\u8CBB", "\u968E\u6BB5", "\u5230\u671F\u65E5", "\u7E73\u8CBB\u65E5", "\u53D7\u76CA\u4EBA", "\u4F63\u91D1", "\u8ACB\u6B3E/\u6536\u6B3E"];
        const rows = [headers];
        customers.forEach((c) => {
          const policies = c.policies && c.policies.length > 0 ? c.policies : [null];
          policies.forEach((p) => {
            rows.push([
              c.name,
              c.company,
              c.occupation,
              c.occupationClass,
              c.contact,
              c.lineId,
              c.emergencyContactName,
              c.emergencyContactPhone,
              c.licensePlate,
              c.email,
              TIERS.find((t) => t.key === c.tier) ? TIERS.find((t) => t.key === c.tier).label : "",
              c.addressCity,
              c.addressStreet,
              c.referredBy,
              p ? p.type : "",
              p ? p.company : "",
              p ? p.insuredAmount : "",
              p ? p.premium : "",
              p ? p.stage : "",
              p ? p.nextDueDate : "",
              p ? p.paymentDate : "",
              p ? p.beneficiary : "",
              p ? p.commission : "",
              p ? p.billingStatus : ""
            ]);
          });
        });
        const csv = "\uFEFF" + rows.map((r) => r.map(csvEscape).join(",")).join("\r\n");
        downloadBlob(csv, `\u4FDD\u96AA\u5BA2\u6236\u8CC7\u6599_${todayStr()}.csv`, "text/csv;charset=utf-8");
      } catch (e) {
        setSaveErr("\u532F\u51FA\u5931\u6557");
      }
      setShowExportMenu(false);
    }
    function handleExportPDF() {
      setShowExportMenu(false);
      setTimeout(() => window.print(), 50);
    }
    function handleImportClick() {
      fileInputRef.current && fileInputRef.current.click();
    }
    function handleImportFile(e) {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        try {
          const data = JSON.parse(ev.target.result);
          if (!Array.isArray(data)) throw new Error("format");
          const withNewIds = data.map((c) => __spreadProps(__spreadValues(__spreadValues({}, emptyCustomer), c), {
            id: uid(),
            policies: (c.policies || []).map((p) => __spreadProps(__spreadValues(__spreadValues({}, emptyPolicy), p), { id: uid() }))
          }));
          setCustomers((cs) => [...cs, ...withNewIds]);
          setSaveErr("");
        } catch (err) {
          setSaveErr("\u532F\u5165\u5931\u6557,\u6A94\u6848\u683C\u5F0F\u4E0D\u6B63\u78BA(\u9700\u70BA\u672C\u7CFB\u7D71\u532F\u51FA\u7684 JSON)");
        }
      };
      reader.readAsText(file);
      e.target.value = "";
    }
    return /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-stone-50 text-stone-900" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 py-8" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between mb-5 flex-wrap gap-3" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", { className: "text-2xl font-semibold tracking-tight text-stone-900 flex items-center gap-2" }, /* @__PURE__ */ React.createElement(Shield, { size: 22, className: "text-emerald-700" }), " \u4FDD\u96AA\u5BA2\u6236\u8FFD\u8E64\u7CFB\u7D71"), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-stone-500 mt-1" }, "\u4FDD\u7D93\u5C08\u7528 \xB7 \u591A\u5BB6\u4FDD\u96AA\u516C\u53F8\u6BD4\u8F03 \xB7 \u591A\u4FDD\u55AE\u8FFD\u8E64 \xB7 \u8CC7\u6599\u81EA\u52D5\u5132\u5B58\u5728\u672C\u6A5F")), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 print-hide" }, /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setShowExportMenu((v) => !v),
        className: "flex items-center gap-1.5 text-sm text-stone-600 border border-stone-300 bg-white hover:bg-stone-100 px-3 py-2.5 rounded-lg transition-colors"
      },
      /* @__PURE__ */ React.createElement(Download, { size: 15 }),
      " \u532F\u51FA"
    ), showExportMenu && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "fixed inset-0 z-40", onClick: () => setShowExportMenu(false) }), /* @__PURE__ */ React.createElement("div", { className: "absolute right-0 top-full mt-1.5 bg-white border border-stone-200 rounded-lg shadow-xl z-50 overflow-hidden w-44" }, /* @__PURE__ */ React.createElement("button", { onClick: handleExportExcel, className: "w-full text-left px-4 py-3 text-sm text-stone-700 hover:bg-stone-50 border-b border-stone-100" }, "Excel(CSV)"), /* @__PURE__ */ React.createElement("button", { onClick: handleExportPDF, className: "w-full text-left px-4 py-3 text-sm text-stone-700 hover:bg-stone-50 border-b border-stone-100" }, "PDF(\u5217\u5370)"), /* @__PURE__ */ React.createElement("button", { onClick: handleExportJSON, className: "w-full text-left px-4 py-3 text-sm text-stone-700 hover:bg-stone-50" }, "JSON(\u5B8C\u6574\u5099\u4EFD)")))), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: handleImportClick,
        className: "flex items-center gap-1.5 text-sm text-stone-600 border border-stone-300 bg-white hover:bg-stone-100 px-3 py-2.5 rounded-lg transition-colors"
      },
      /* @__PURE__ */ React.createElement(Upload, { size: 15 }),
      " \u532F\u5165"
    ), /* @__PURE__ */ React.createElement("input", { ref: fileInputRef, type: "file", accept: "application/json", className: "hidden", onChange: handleImportFile }), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: openAddCustomer,
        className: "flex items-center gap-1.5 bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-medium px-4 py-2.5 rounded-lg transition-colors shadow-sm"
      },
      /* @__PURE__ */ React.createElement(Plus, { size: 16 }),
      " \u65B0\u589E\u5BA2\u6236"
    ))), saveErr && /* @__PURE__ */ React.createElement("div", { className: "mb-4 flex items-center gap-2 text-sm text-rose-700 bg-rose-50 border border-rose-200 rounded-lg px-3 py-2" }, /* @__PURE__ */ React.createElement(AlertCircle, { size: 15 }), " ", saveErr), /* @__PURE__ */ React.createElement("div", { className: "relative mb-3 print-hide" }, /* @__PURE__ */ React.createElement(Search, { size: 15, className: "absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" }), /* @__PURE__ */ React.createElement(
      "input",
      {
        value: query,
        onChange: (e) => setQuery(e.target.value),
        placeholder: "\u641C\u5C0B\u5BA2\u6236\u6216\u4FDD\u96AA\u516C\u53F8...",
        className: "w-full pl-9 pr-3 py-2.5 text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-emerald-400 bg-white"
      }
    )), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 mb-3 text-sm print-hide" }, /* @__PURE__ */ React.createElement("span", { className: "flex items-center gap-1 text-stone-500 text-xs w-24 shrink-0" }, /* @__PURE__ */ React.createElement(Calendar, { size: 13 }), " \u6210\u4EA4\u6708\u4EFD\u7BE9\u9078"), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "month",
        value: dealMonth,
        onChange: (e) => setDealMonth(e.target.value),
        className: "border border-stone-300 rounded-lg px-2.5 py-1.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-300"
      }
    ), dealMonth && /* @__PURE__ */ React.createElement("button", { onClick: () => setDealMonth(""), className: "text-xs text-stone-400 hover:text-stone-700 underline" }, "\u6E05\u9664")), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 mb-6 text-sm flex-wrap print-hide" }, /* @__PURE__ */ React.createElement("span", { className: "text-stone-500 text-xs w-24 shrink-0" }, "\u958B\u767C\u72C0\u614B", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { className: "text-stone-300" }, "\u53EF\u8907\u9078")), /* @__PURE__ */ React.createElement(
      PillGroup,
      {
        value: stageFilter,
        onToggle: (key) => toggleFilter(setStageFilter, stageFilter, key),
        options: [{ key: "\u5168\u90E8", label: "\u5168\u90E8" }, ...STAGES.map((s) => ({ key: s.key, label: s.label })), { key: "\u5DF2\u6D41\u5931", label: "\u5DF2\u6D41\u5931" }]
      }
    )), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 mb-6 text-sm flex-wrap print-hide" }, /* @__PURE__ */ React.createElement("span", { className: "text-stone-500 text-xs w-24 shrink-0" }, "\u4FDD\u96AA\u5225", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { className: "text-stone-300" }, "\u53EF\u8907\u9078")), /* @__PURE__ */ React.createElement(
      PillGroup,
      {
        value: categoryFilter,
        onToggle: (key) => toggleFilter(setCategoryFilter, categoryFilter, key),
        options: [{ key: "\u5168\u90E8", label: "\u5168\u90E8" }, ...CATEGORIES.map((c) => ({ key: c, label: c }))]
      }
    )), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 mb-6 text-sm flex-wrap print-hide" }, /* @__PURE__ */ React.createElement("span", { className: "text-stone-500 text-xs w-24 shrink-0" }, "\u5BA2\u6236\u5206\u7D1A", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { className: "text-stone-300" }, "\u53EF\u8907\u9078")), /* @__PURE__ */ React.createElement(
      PillGroup,
      {
        value: tierFilter,
        onToggle: (key) => toggleFilter(setTierFilter, tierFilter, key),
        options: [{ key: "\u5168\u90E8", label: "\u5168\u90E8" }, ...TIERS.map((t) => ({ key: t.key, label: t.label }))]
      }
    )), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 mb-2 text-sm flex-wrap print-hide" }, /* @__PURE__ */ React.createElement("span", { className: "text-stone-500 text-xs w-24 shrink-0" }, "\u7E23\u5E02\u7BE9\u9078"), /* @__PURE__ */ React.createElement(
      "select",
      {
        value: cityFilter,
        onChange: (e) => setCityFilter(e.target.value),
        className: "border border-stone-300 rounded-lg px-2.5 py-1.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-300"
      },
      /* @__PURE__ */ React.createElement("option", { value: "" }, "\u5168\u90E8\u7E23\u5E02"),
      TAIWAN_CITIES.map((city) => /* @__PURE__ */ React.createElement("option", { key: city, value: city }, city))
    ), (cityFilter || tierFilter.length > 0 || stageFilter.length > 0 || categoryFilter.length > 0 || query || dealMonth) && /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => {
          setCityFilter("");
          setTierFilter([]);
          setStageFilter([]);
          setCategoryFilter([]);
          setQuery("");
          setDealMonth("");
        },
        className: "text-xs text-stone-400 hover:text-stone-700 underline"
      },
      "\u986F\u793A\u5168\u90E8\u5BA2\u6236(\u6E05\u9664\u7BE9\u9078)"
    )), /* @__PURE__ */ React.createElement("div", { className: "mb-5" }), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-5" }, /* @__PURE__ */ React.createElement(StatCard, { icon: /* @__PURE__ */ React.createElement(Users, { size: 15 }), label: "\u5BA2\u6236\u6578", value: stats.totalCustomers }), /* @__PURE__ */ React.createElement(StatCard, { icon: /* @__PURE__ */ React.createElement(TrendingUp, { size: 15 }), label: "\u9810\u4F30\u7E3D\u4FDD\u8CBB", value: currency(stats.totalPremium), prefix: "$" }), /* @__PURE__ */ React.createElement(StatCard, { icon: /* @__PURE__ */ React.createElement(Wallet, { size: 15 }), label: "\u5DF2\u6210\u4EA4\u4F63\u91D1", value: currency(stats.commission), prefix: "$", accent: "text-emerald-700", sub: `\u5BE6\u6536 $${currency(stats.received)}` }), /* @__PURE__ */ React.createElement(StatCard, { icon: /* @__PURE__ */ React.createElement(Banknote, { size: 15 }), label: "\u5BE6\u6536\u91D1\u984D", value: currency(stats.received), prefix: "$", accent: "text-emerald-700" }), /* @__PURE__ */ React.createElement(StatCard, { icon: /* @__PURE__ */ React.createElement(FileText, { size: 15 }), label: "\u521D\u6B65\u63A5\u6D3D", value: stats.earlyStage, suffix: "\u4EF6" }), /* @__PURE__ */ React.createElement(StatCard, { icon: /* @__PURE__ */ React.createElement(AlertCircle, { size: 15 }), label: "\u5831\u50F9/\u8B70\u50F9\u4E2D", value: stats.quoting, suffix: "\u4EF6", accent: stats.quoting > 0 ? "text-amber-600" : void 0 }), /* @__PURE__ */ React.createElement(StatCard, { icon: /* @__PURE__ */ React.createElement(Shield, { size: 15 }), label: "\u5DF2\u7C3D\u7D04", value: stats.won, suffix: "\u4EF6", accent: "text-emerald-700" })), todayItems.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-1.5 text-sm font-medium text-amber-700 mb-3" }, /* @__PURE__ */ React.createElement(ListTodo, { size: 15 }), " \u4ECA\u65E5\u5F85\u8FA6(", todayItems.length, ")"), /* @__PURE__ */ React.createElement("div", { className: "space-y-1.5" }, todayItems.map((it, idx) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: idx,
        onClick: () => jumpToCustomer(it.custId),
        className: "w-full flex items-center justify-between gap-2 text-sm bg-white border border-amber-100 rounded-lg px-3 py-2 hover:bg-amber-100/50 transition-colors text-left"
      },
      /* @__PURE__ */ React.createElement("span", { className: "text-stone-700 font-medium" }, it.custName),
      /* @__PURE__ */ React.createElement("span", { className: "text-amber-700 text-xs font-medium shrink-0" }, it.label)
    )))), /* @__PURE__ */ React.createElement("div", { className: "bg-white border border-stone-200 rounded-xl p-5 mb-5" }, /* @__PURE__ */ React.createElement("div", { className: "text-xs font-medium text-stone-500 mb-3 tracking-wide" }, "\u4FDD\u55AE\u92B7\u552E\u7BA1\u9053 \xB7 \u5404\u72C0\u614B\u5BA2\u6236\u6578\u8207\u91D1\u984D"), /* @__PURE__ */ React.createElement("div", { className: "flex items-end gap-1.5 h-28" }, STAGES.map((s, i) => {
      const { count, premiumSum, receivedSum } = funnelData[i];
      const h = Math.max(8, count / funnelMax * 100);
      return /* @__PURE__ */ React.createElement("div", { key: s.key, className: "flex-1 flex flex-col items-center justify-end h-full gap-1" }, /* @__PURE__ */ React.createElement("div", { className: "text-sm font-serif font-semibold text-stone-800" }, count), premiumSum > 0 && /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-stone-400" }, "$", currency(premiumSum)), receivedSum !== null && receivedSum > 0 && /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-emerald-600 font-medium" }, "\u5BE6\u6536$", currency(receivedSum)), /* @__PURE__ */ React.createElement("div", { className: `w-full rounded-t-md ${s.tone}`, style: { height: `${h}%` } }), /* @__PURE__ */ React.createElement("div", { className: "text-xs text-stone-500" }, s.label));
    }))), referralStats.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "bg-white border border-stone-200 rounded-xl p-5 mb-5" }, /* @__PURE__ */ React.createElement("div", { className: "text-xs font-medium text-stone-500 mb-3 tracking-wide" }, "\u8F49\u4ECB\u7D39\u4F86\u6E90\u6392\u884C(\u524D 5 \u540D)"), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, referralStats.map((r, i) => /* @__PURE__ */ React.createElement("div", { key: r.name, className: "flex items-center gap-3" }, /* @__PURE__ */ React.createElement("span", { className: "text-xs text-stone-400 w-4" }, i + 1), /* @__PURE__ */ React.createElement("span", { className: "text-sm text-stone-700 flex-1" }, r.name), /* @__PURE__ */ React.createElement("div", { className: "flex-1 max-w-[160px] bg-stone-100 rounded-full h-2 overflow-hidden" }, /* @__PURE__ */ React.createElement("div", { className: "h-full bg-emerald-500", style: { width: `${r.count / referralStats[0].count * 100}%` } })), /* @__PURE__ */ React.createElement("span", { className: "text-xs text-stone-500 w-16 text-right" }, r.count, " \u4F4D\u5BA2\u6236"))))), overdueItems.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "bg-rose-50 border border-rose-200 rounded-xl p-4 mb-5" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-1.5 text-sm font-medium text-rose-700 mb-3" }, /* @__PURE__ */ React.createElement(AlertCircle, { size: 15 }), " \u5DF2\u903E\u671F\u4FDD\u55AE(", overdueItems.length, ")"), /* @__PURE__ */ React.createElement("div", { className: "space-y-1.5" }, overdueItems.map((it, idx) => /* @__PURE__ */ React.createElement(
      "div",
      {
        key: idx,
        className: "w-full flex items-center justify-between gap-2 text-sm bg-white border border-rose-100 rounded-lg px-3 py-2"
      },
      /* @__PURE__ */ React.createElement("button", { onClick: () => jumpToCustomer(it.custId), className: "flex-1 min-w-0 text-left" }, /* @__PURE__ */ React.createElement("span", { className: "text-stone-700" }, /* @__PURE__ */ React.createElement("span", { className: "font-medium" }, it.custName), " \xB7 ", it.type), /* @__PURE__ */ React.createElement("div", { className: "text-rose-600 text-xs font-medium" }, it.label || `${it.dateLabel}\u5DF2\u903E\u671F ${Math.abs(it.diff)} \u5929`, " \xB7 ", it.date)),
      /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-1 shrink-0" }, it.custContact && /* @__PURE__ */ React.createElement(
        "a",
        {
          href: `tel:${it.custContact}`,
          title: "\u81F4\u96FB\u5BA2\u6236",
          onClick: (e) => e.stopPropagation(),
          className: "p-2 text-stone-400 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg"
        },
        "\u{1F4DE}"
      ), it.custLineId && /* @__PURE__ */ React.createElement(
        "a",
        {
          href: `https://line.me/ti/p/~${it.custLineId}`,
          target: "_blank",
          rel: "noreferrer",
          title: "LINE \u901A\u77E5\u5BA2\u6236",
          onClick: (e) => e.stopPropagation(),
          className: "p-2 text-stone-400 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg"
        },
        "\u{1F4AC}"
      ), it.dateType && /* @__PURE__ */ React.createElement(
        "button",
        {
          onClick: () => markPolicyPaid(it.custId, it.polId, it.dateType),
          title: "\u6A19\u8A18\u5DF2\u7E73\u8CBB",
          className: "flex items-center gap-1 text-xs px-2.5 py-2 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
        },
        /* @__PURE__ */ React.createElement(Check, { size: 13 }),
        " \u5DF2\u7E73\u8CBB"
      ))
    )))), /* @__PURE__ */ React.createElement("div", { className: "space-y-3" }, filteredCustomers.length === 0 ? /* @__PURE__ */ React.createElement("div", { className: "bg-white border border-stone-200 rounded-xl py-14 text-center text-stone-400 text-sm" }, customers.length === 0 ? "\u9084\u6C92\u6709\u5BA2\u6236\u8CC7\u6599,\u9EDE\u53F3\u4E0A\u89D2\u300C\u65B0\u589E\u5BA2\u6236\u300D\u958B\u59CB\u8FFD\u8E64" : "\u6C92\u6709\u7B26\u5408\u689D\u4EF6\u7684\u5BA2\u6236") : filteredCustomers.map((c) => {
      var _a;
      const isOpen = (_a = expanded[c.id]) != null ? _a : true;
      const nb = nextBirthday(c.birthday);
      const pStage = primaryStageOf(c.policies);
      const stageInfo = pStage ? STAGES.find((s) => s.key === pStage) : null;
      const tierInfo = TIERS.find((t) => t.key === c.tier);
      const custPremium = (c.policies || []).filter((p) => !p.lost).reduce((s, p) => s + (Number(p.premium) || 0), 0);
      const custCommission = (c.policies || []).filter((p) => p.stage === "\u6210\u4EA4" && !p.lost).reduce((s, p) => s + (Number(p.commission) || 0), 0);
      const custReceived = (c.policies || []).filter((p) => p.stage === "\u6210\u4EA4" && !p.lost && p.billingStatus === "\u5DF2\u6536\u6B3E").reduce((s, p) => s + (Number(p.commission) || 0), 0);
      const actTone = c.lastActivityDate ? dueTone(c.lastActivityDate, false) : null;
      const alert = customerAlert(c);
      const anniv = customerAnniversary(c);
      return /* @__PURE__ */ React.createElement("div", { key: c.id, id: `cust-${c.id}`, className: "bg-white border border-stone-200 rounded-xl overflow-hidden scroll-mt-4" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-start gap-3 px-4 py-3 cursor-pointer hover:bg-stone-50", onClick: () => toggleExpand(c.id) }, isOpen ? /* @__PURE__ */ React.createElement(ChevronDown, { size: 16, className: "text-stone-400 mt-2.5 shrink-0" }) : /* @__PURE__ */ React.createElement(ChevronRight, { size: 16, className: "text-stone-400 mt-2.5 shrink-0" }), /* @__PURE__ */ React.createElement("div", { className: `w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium shrink-0 ${tierInfo ? tierInfo.bg : "bg-stone-200"} ${tierInfo ? tierInfo.text : "text-stone-500"}` }, initialsOf(c.name)), /* @__PURE__ */ React.createElement("div", { className: "flex-1 min-w-0" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 flex-wrap" }, /* @__PURE__ */ React.createElement("span", { className: "font-medium text-stone-800" }, c.name), nb && nb.diff <= 30 && /* @__PURE__ */ React.createElement("span", { className: "inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-700" }, /* @__PURE__ */ React.createElement(Cake, { size: 11 }), " ", nb.diff === 0 ? "\u4ECA\u5929\u751F\u65E5" : `${nb.diff}\u5929\u5F8C\u751F\u65E5`), anniv && /* @__PURE__ */ React.createElement("span", { className: "inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700" }, /* @__PURE__ */ React.createElement(PartyPopper, { size: 11 }), " ", anniv.diff === 0 ? `\u4FDD\u55AE\u7B2C${anniv.years}\u9031\u5E74\u5C31\u662F\u4ECA\u5929` : `\u4FDD\u55AE\u7B2C${anniv.years}\u9031\u5E74${anniv.diff}\u5929\u5F8C`), alert && /* @__PURE__ */ React.createElement("span", { className: `inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full ${alert.overdue ? "bg-rose-100 text-rose-700" : "bg-amber-100 text-amber-700"}` }, /* @__PURE__ */ React.createElement(AlertCircle, { size: 11 }), " ", alert.overdue ? "\u4FDD\u55AE\u5DF2\u903E\u671F" : alert.diff === 0 ? "\u4FDD\u55AE\u4ECA\u5929\u5230\u671F/\u7E73\u8CBB" : `\u4FDD\u55AE${alert.diff}\u5929\u5F8C\u5230\u671F/\u7E73\u8CBB`)), (c.company || c.occupation) && /* @__PURE__ */ React.createElement("div", { className: "text-xs text-stone-400 mt-0.5" }, c.company, c.company && c.occupation ? " \xB7 " : "", c.occupation), c.referredBy && /* @__PURE__ */ React.createElement("div", { className: "text-xs text-stone-400 mt-0.5" }, "\u4ECB\u7D39\u4EBA:", c.referredBy), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3 text-xs text-stone-400 mt-0.5 flex-wrap" }, c.contact && /* @__PURE__ */ React.createElement("span", { className: "flex items-center gap-1" }, /* @__PURE__ */ React.createElement(Phone, { size: 11 }), c.contact), c.email && /* @__PURE__ */ React.createElement("span", { className: "flex items-center gap-1" }, /* @__PURE__ */ React.createElement(Mail, { size: 11 }), c.email), c.lineId && /* @__PURE__ */ React.createElement("span", { className: "flex items-center gap-1" }, "\u{1F4AC}", c.lineId), /* @__PURE__ */ React.createElement("span", null, (c.policies || []).length, " \u5F35\u4FDD\u55AE"), c.nextFollowUp && /* @__PURE__ */ React.createElement("span", { className: `flex items-center gap-1 ${dueTone(c.nextFollowUp, false, 0).cls}` }, /* @__PURE__ */ React.createElement(Calendar, { size: 11 }), " \u4E0B\u6B21\u8FFD\u8E64 ", c.nextFollowUp)), quickEditId === c.id ? /* @__PURE__ */ React.createElement("div", { className: "mt-2 flex flex-col gap-1.5 bg-stone-50 border border-stone-200 rounded-lg p-2.5", onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement(
        "input",
        {
          value: quickForm.lastActivity,
          onChange: (e) => setQuickForm(__spreadProps(__spreadValues({}, quickForm), { lastActivity: e.target.value })),
          placeholder: "\u9019\u6B21\u806F\u7E6B\u9032\u5EA6,\u4F8B:\u5DF2\u5BC4\u9001\u8A08\u756B\u66F8",
          className: "w-full px-2.5 py-1.5 text-xs border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-300"
        }
      ), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement("label", { className: "text-xs text-stone-400 shrink-0" }, "\u806F\u7E6B\u65E5"), /* @__PURE__ */ React.createElement(
        "input",
        {
          type: "date",
          value: quickForm.lastActivityDate,
          onChange: (e) => setQuickForm(__spreadProps(__spreadValues({}, quickForm), { lastActivityDate: e.target.value })),
          className: "flex-1 px-2 py-1 text-xs border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-300"
        }
      )), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement("label", { className: "text-xs text-stone-400 shrink-0" }, "\u4E0B\u6B21\u8FFD\u8E64"), /* @__PURE__ */ React.createElement(
        "input",
        {
          type: "date",
          value: quickForm.nextFollowUp,
          onChange: (e) => setQuickForm(__spreadProps(__spreadValues({}, quickForm), { nextFollowUp: e.target.value })),
          className: "flex-1 px-2 py-1 text-xs border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-300"
        }
      )), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2 pt-1" }, /* @__PURE__ */ React.createElement("button", { onClick: () => setQuickEditId(null), className: "flex-1 py-1.5 text-xs rounded-md border border-stone-300 text-stone-600 hover:bg-white" }, "\u53D6\u6D88"), /* @__PURE__ */ React.createElement("button", { onClick: () => saveQuickEdit(c.id), className: "flex-1 flex items-center justify-center gap-1 py-1.5 text-xs rounded-md bg-emerald-700 hover:bg-emerald-800 text-white font-medium" }, /* @__PURE__ */ React.createElement(Check, { size: 12 }), " \u5132\u5B58\u9032\u5EA6"))) : /* @__PURE__ */ React.createElement(
        "button",
        {
          onClick: (e) => {
            e.stopPropagation();
            openQuickEdit(c);
          },
          className: "w-full text-left mt-1.5 flex items-center gap-1 text-xs text-stone-500 hover:text-emerald-700 group"
        },
        /* @__PURE__ */ React.createElement(FileText, { size: 11, className: "shrink-0" }),
        c.lastActivity ? /* @__PURE__ */ React.createElement(React.Fragment, null, c.lastActivityDate && /* @__PURE__ */ React.createElement("span", { className: `shrink-0 ${actTone ? actTone.cls : ""}` }, c.lastActivityDate), /* @__PURE__ */ React.createElement("span", { className: "truncate" }, c.lastActivity)) : /* @__PURE__ */ React.createElement("span", { className: "text-stone-400 group-hover:text-emerald-700" }, "\u9EDE\u6B64\u66F4\u65B0\u806F\u7E6B\u9032\u5EA6\u2026"),
        /* @__PURE__ */ React.createElement(Pencil, { size: 10, className: "opacity-0 group-hover:opacity-100 shrink-0" })
      )), /* @__PURE__ */ React.createElement("div", { className: "flex flex-col items-end gap-1 shrink-0", onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-1.5" }, tierInfo && /* @__PURE__ */ React.createElement("span", { className: `text-xs font-medium px-2 py-0.5 rounded-full ${tierInfo.bg} ${tierInfo.text}` }, c.tier), stageInfo && /* @__PURE__ */ React.createElement("span", { className: `text-xs font-medium px-2 py-0.5 rounded-full ${stageInfo.bgSoft} ${stageInfo.text}` }, stageInfo.label)), custPremium > 0 && /* @__PURE__ */ React.createElement("div", { className: "text-sm font-serif font-semibold text-stone-700" }, "$", currency(custPremium)), custCommission > 0 && /* @__PURE__ */ React.createElement("div", { className: "text-xs text-stone-400" }, "\u4F63\u91D1 $", currency(custCommission), custReceived > 0 && /* @__PURE__ */ React.createElement("span", { className: "text-emerald-600" }, " \xB7 \u5DF2\u6536 $", currency(custReceived))), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 mt-1 print-hide" }, /* @__PURE__ */ React.createElement("button", { onClick: () => openAddPolicy(c.id), title: "\u65B0\u589E\u4FDD\u55AE", className: "p-2.5 text-stone-400 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg" }, /* @__PURE__ */ React.createElement(Plus, { size: 18 })), /* @__PURE__ */ React.createElement("button", { onClick: () => openEditCustomer(c), title: "\u7DE8\u8F2F\u5BA2\u6236", className: "p-2.5 text-stone-400 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg" }, /* @__PURE__ */ React.createElement(Pencil, { size: 18 })), /* @__PURE__ */ React.createElement("button", { onClick: () => confirmRemoveCustomer(c), title: "\u522A\u9664\u5BA2\u6236", className: "p-2.5 text-stone-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg" }, /* @__PURE__ */ React.createElement(Trash2, { size: 18 }))))), isOpen && /* @__PURE__ */ React.createElement("div", { className: "border-t border-stone-100" }, c.note && /* @__PURE__ */ React.createElement("div", { className: "px-4 py-2 text-xs text-stone-500 bg-stone-50 border-b border-stone-100" }, "\u5099\u8A3B:", c.note), /* @__PURE__ */ React.createElement("div", { className: "px-4 py-3 border-b border-stone-100" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between mb-2" }, /* @__PURE__ */ React.createElement("span", { className: "text-xs font-medium text-stone-500" }, "\u56DE\u8A2A\u7D00\u9304(", (c.visits || []).length, ")"), /* @__PURE__ */ React.createElement("button", { onClick: () => openAddVisit(c.id), className: "print-hide flex items-center gap-1 text-xs text-emerald-700 hover:underline" }, /* @__PURE__ */ React.createElement(Plus, { size: 12 }), " \u65B0\u589E\u7D00\u9304")), visitFormCustId === c.id && /* @__PURE__ */ React.createElement("div", { className: "print-hide mb-2 flex flex-col gap-1.5 bg-stone-50 border border-stone-200 rounded-lg p-2.5" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement("label", { className: "text-xs text-stone-400 shrink-0" }, "\u65E5\u671F"), /* @__PURE__ */ React.createElement(
        "input",
        {
          type: "date",
          value: visitDraft.date,
          onChange: (e) => setVisitDraft(__spreadProps(__spreadValues({}, visitDraft), { date: e.target.value })),
          className: "flex-1 px-2 py-1 text-xs border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-300"
        }
      )), /* @__PURE__ */ React.createElement(
        "textarea",
        {
          rows: 2,
          value: visitDraft.note,
          onChange: (e) => setVisitDraft(__spreadProps(__spreadValues({}, visitDraft), { note: e.target.value })),
          placeholder: "\u9019\u6B21\u56DE\u8A2A\u7684\u5167\u5BB9\u3001\u5BA2\u6236\u53CD\u61C9\u3001\u4E0B\u6B21\u8981\u6CE8\u610F\u7684\u4E8B...",
          className: "w-full px-2.5 py-1.5 text-xs border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-300 resize-none"
        }
      ), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2 pt-1" }, /* @__PURE__ */ React.createElement("button", { onClick: () => setVisitFormCustId(null), className: "flex-1 py-1.5 text-xs rounded-md border border-stone-300 text-stone-600 hover:bg-white" }, "\u53D6\u6D88"), /* @__PURE__ */ React.createElement("button", { onClick: () => saveVisit(c.id), className: "flex-1 py-1.5 text-xs rounded-md bg-emerald-700 hover:bg-emerald-800 text-white font-medium" }, "\u5132\u5B58\u7D00\u9304"))), (c.visits || []).length === 0 ? /* @__PURE__ */ React.createElement("div", { className: "text-xs text-stone-400" }, "\u5C1A\u7121\u56DE\u8A2A\u7D00\u9304") : /* @__PURE__ */ React.createElement("div", { className: "space-y-1.5" }, [...c.visits || []].sort((a, b) => (b.date || "").localeCompare(a.date || "")).map((v) => /* @__PURE__ */ React.createElement("div", { key: v.id, className: "flex items-start justify-between gap-2 text-xs bg-stone-50 rounded-lg px-3 py-2" }, /* @__PURE__ */ React.createElement("div", { className: "flex-1 min-w-0" }, /* @__PURE__ */ React.createElement("span", { className: "text-stone-400 shrink-0" }, v.date), /* @__PURE__ */ React.createElement("span", { className: "text-stone-600 ml-2 whitespace-pre-wrap" }, v.note)), /* @__PURE__ */ React.createElement("button", { onClick: () => removeVisit(c.id, v.id), className: "print-hide p-1 text-stone-300 hover:text-rose-600 shrink-0" }, /* @__PURE__ */ React.createElement(X, { size: 12 })))))), (c.policies || []).length === 0 ? /* @__PURE__ */ React.createElement("div", { className: "px-4 py-4 text-xs text-stone-400" }, "\u5C1A\u7121\u4FDD\u55AE,\u9EDE\u4E0A\u65B9 + \u65B0\u589E\u4FDD\u55AE") : /* @__PURE__ */ React.createElement("div", { className: "overflow-x-auto" }, /* @__PURE__ */ React.createElement("table", { className: "w-full text-sm" }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", { className: "text-left text-xs text-stone-400 border-b border-stone-100" }, /* @__PURE__ */ React.createElement("th", { className: "px-4 py-2 font-medium" }, "\u96AA\u7A2E"), /* @__PURE__ */ React.createElement("th", { className: "px-4 py-2 font-medium" }, "\u4FDD\u96AA\u516C\u53F8"), /* @__PURE__ */ React.createElement("th", { className: "px-4 py-2 font-medium" }, "\u4FDD\u984D/\u4FDD\u8CBB"), /* @__PURE__ */ React.createElement("th", { className: "px-4 py-2 font-medium" }, "\u968E\u6BB5"), /* @__PURE__ */ React.createElement("th", { className: "px-4 py-2 font-medium" }, "\u5230\u671F\u65E5"), /* @__PURE__ */ React.createElement("th", { className: "px-4 py-2 font-medium" }, "\u7E73\u8CBB\u65E5"), /* @__PURE__ */ React.createElement("th", { className: "px-4 py-2 font-medium" }, "\u53D7\u76CA\u4EBA"), /* @__PURE__ */ React.createElement("th", { className: "px-4 py-2 font-medium" }, "\u8ACB\u6B3E/\u6536\u6B3E"), /* @__PURE__ */ React.createElement("th", { className: "px-4 py-2 font-medium text-right print-hide" }, "\u64CD\u4F5C"))), /* @__PURE__ */ React.createElement("tbody", null, c.policies.map((p) => {
        const sInfo = STAGES.find((s) => s.key === p.stage) || STAGES[0];
        const dt = dueTone(p.nextDueDate, p.lost, expiryThresholdOf(p.category));
        const pt = p.category === "\u58FD\u96AA" ? dueTone(p.paymentDate, p.lost, 30) : null;
        const anv = !p.lost ? nextAnniversary(p.effectiveDate) : null;
        return /* @__PURE__ */ React.createElement("tr", { key: p.id, className: `border-b border-stone-50 last:border-0 ${p.lost ? "opacity-50" : ""}` }, /* @__PURE__ */ React.createElement("td", { className: "px-4 py-2.5" }, /* @__PURE__ */ React.createElement("div", { className: "text-stone-800" }, p.type), /* @__PURE__ */ React.createElement("div", { className: "text-xs text-stone-400" }, p.category, p.payFreq ? ` \xB7 ${p.payFreq}` : ""), p.insured && /* @__PURE__ */ React.createElement("div", { className: "text-xs text-stone-400" }, "\u88AB\u4FDD:", p.insured), p.attachmentName && /* @__PURE__ */ React.createElement("a", { href: p.attachmentData, download: p.attachmentName, className: "text-xs text-emerald-600 underline" }, "\u{1F4C4} ", p.attachmentName), anv && anv.diff <= 30 && /* @__PURE__ */ React.createElement("div", { className: "text-xs text-emerald-600" }, "\u{1F389} \u7B2C", anv.years, "\u9031\u5E74 ", anv.diff === 0 ? "\u5C31\u662F\u4ECA\u5929" : `${anv.diff}\u5929\u5F8C`)), /* @__PURE__ */ React.createElement("td", { className: "px-4 py-2.5 text-stone-500" }, p.company || "\u2014"), /* @__PURE__ */ React.createElement("td", { className: "px-4 py-2.5 font-serif text-stone-700" }, p.insuredAmount ? `\u4FDD\u984D $${currency(p.insuredAmount)}` : "\u2014", /* @__PURE__ */ React.createElement("div", { className: "text-xs text-stone-400 font-sans" }, p.premium ? `\u4FDD\u8CBB $${currency(p.premium)}` : "")), /* @__PURE__ */ React.createElement("td", { className: "px-4 py-2.5" }, p.lost ? /* @__PURE__ */ React.createElement("span", { className: "inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-stone-200 text-stone-500" }, /* @__PURE__ */ React.createElement(Ban, { size: 11 }), " \u5DF2\u6D41\u5931") : /* @__PURE__ */ React.createElement("div", { className: "relative inline-block" }, /* @__PURE__ */ React.createElement(
          "select",
          {
            value: p.stage,
            onChange: (e) => quickStageChange(c.id, p.id, e.target.value),
            className: `appearance-none text-xs font-medium pl-2.5 pr-6 py-1 rounded-full ${sInfo.bgSoft} ${sInfo.text} border-0 focus:outline-none focus:ring-2 ${sInfo.ring} cursor-pointer`
          },
          STAGES.map((s) => /* @__PURE__ */ React.createElement("option", { key: s.key, value: s.key }, s.label))
        ), /* @__PURE__ */ React.createElement(ChevronDown, { size: 11, className: "pointer-events-none absolute right-2 top-1/2 -translate-y-1/2" }))), /* @__PURE__ */ React.createElement("td", { className: "px-4 py-2.5" }, /* @__PURE__ */ React.createElement("div", { className: `text-xs ${dt.cls}` }, dt.label), p.nextDuePaidFor === p.nextDueDate && p.nextDuePaidDate && /* @__PURE__ */ React.createElement("div", { className: "text-xs text-emerald-600" }, "\u2713 \u5DF2\u7E73\u8CBB(\u78BA\u8A8D\u65BC", p.nextDuePaidDate, ")")), /* @__PURE__ */ React.createElement("td", { className: "px-4 py-2.5" }, /* @__PURE__ */ React.createElement("div", { className: `text-xs ${pt ? pt.cls : "text-stone-300"}` }, pt ? pt.label : "\u2014"), p.paymentPaidFor === p.paymentDate && p.paymentPaidDate && /* @__PURE__ */ React.createElement("div", { className: "text-xs text-emerald-600" }, "\u2713 \u5DF2\u7E73\u8CBB(\u78BA\u8A8D\u65BC", p.paymentPaidDate, ")")), /* @__PURE__ */ React.createElement("td", { className: "px-4 py-2.5 text-stone-500 text-xs" }, p.beneficiary || "\u2014"), /* @__PURE__ */ React.createElement("td", { className: "px-4 py-2.5" }, p.lost ? /* @__PURE__ */ React.createElement("span", { className: "text-xs text-stone-300" }, "\u2014") : /* @__PURE__ */ React.createElement("div", { className: "relative inline-block" }, (() => {
          const bInfo = BILLING_STATUS.find((b) => b.key === p.billingStatus) || BILLING_STATUS[0];
          return /* @__PURE__ */ React.createElement(
            "select",
            {
              value: p.billingStatus || "\u672A\u8ACB\u6B3E",
              onChange: (e) => quickBillingChange(c.id, p.id, e.target.value),
              className: `appearance-none text-xs font-medium pl-2.5 pr-6 py-1 rounded-full ${bInfo.bg} ${bInfo.text} border-0 focus:outline-none focus:ring-2 focus:ring-emerald-200 cursor-pointer`
            },
            BILLING_STATUS.map((b) => /* @__PURE__ */ React.createElement("option", { key: b.key, value: b.key }, b.key))
          );
        })(), /* @__PURE__ */ React.createElement(ChevronDown, { size: 11, className: "pointer-events-none absolute right-2 top-1/2 -translate-y-1/2" }))), /* @__PURE__ */ React.createElement("td", { className: "px-4 py-2.5 print-hide" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-end gap-2" }, /* @__PURE__ */ React.createElement("button", { onClick: () => togglePolicyLost(c.id, p.id), title: p.lost ? "\u6062\u5FA9\u8FFD\u8E64" : "\u6A19\u8A18\u6D41\u5931", className: "p-2.5 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-lg" }, /* @__PURE__ */ React.createElement(Ban, { size: 17 })), /* @__PURE__ */ React.createElement("button", { onClick: () => openEditPolicy(c.id, p), title: "\u7DE8\u8F2F", className: "p-2.5 text-stone-400 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg" }, /* @__PURE__ */ React.createElement(Pencil, { size: 17 })), /* @__PURE__ */ React.createElement("button", { onClick: () => confirmRemovePolicy(c.id, p), title: "\u522A\u9664", className: "p-2.5 text-stone-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg" }, /* @__PURE__ */ React.createElement(Trash2, { size: 17 })))));
      }))))));
    }))), showCustForm && /* @__PURE__ */ React.createElement("div", { className: "fixed inset-0 bg-stone-900/40 flex items-center justify-center p-4 z-50" }, /* @__PURE__ */ React.createElement("div", { className: "bg-white rounded-xl w-full max-w-md p-6 shadow-xl max-h-[90vh] overflow-y-auto" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between mb-4" }, /* @__PURE__ */ React.createElement("h2", { className: "text-base font-semibold text-stone-800" }, editingCustId ? "\u7DE8\u8F2F\u5BA2\u6236" : "\u65B0\u589E\u5BA2\u6236"), /* @__PURE__ */ React.createElement("button", { onClick: () => setShowCustForm(false), className: "p-2 -m-2 text-stone-400 hover:text-stone-700" }, /* @__PURE__ */ React.createElement(X, { size: 20 }))), /* @__PURE__ */ React.createElement("form", { onSubmit: submitCustomer, className: "space-y-3" }, /* @__PURE__ */ React.createElement(Field, { label: "\u5BA2\u6236\u5206\u7D1A" }, /* @__PURE__ */ React.createElement(
      "select",
      {
        value: custForm.tier,
        onChange: (e) => setCustForm(__spreadProps(__spreadValues({}, custForm), { tier: e.target.value })),
        className: "w-full px-3 py-2 text-sm border border-stone-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-emerald-300"
      },
      /* @__PURE__ */ React.createElement("option", { value: "" }, "\u672A\u5206\u7D1A"),
      TIERS.map((t) => /* @__PURE__ */ React.createElement("option", { key: t.key, value: t.key }, t.label))
    )), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-3" }, /* @__PURE__ */ React.createElement(Field, { label: "\u59D3\u540D *" }, /* @__PURE__ */ React.createElement(
      "input",
      {
        required: true,
        value: custForm.name,
        onChange: (e) => setCustForm(__spreadProps(__spreadValues({}, custForm), { name: e.target.value })),
        className: "w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300"
      }
    )), /* @__PURE__ */ React.createElement(Field, { label: "\u516C\u53F8/\u670D\u52D9\u55AE\u4F4D" }, /* @__PURE__ */ React.createElement(
      "input",
      {
        value: custForm.company,
        onChange: (e) => setCustForm(__spreadProps(__spreadValues({}, custForm), { company: e.target.value })),
        className: "w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300"
      }
    ))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-3" }, /* @__PURE__ */ React.createElement(Field, { label: "\u8077\u696D" }, /* @__PURE__ */ React.createElement(
      "input",
      {
        value: custForm.occupation,
        onChange: (e) => setCustForm(__spreadProps(__spreadValues({}, custForm), { occupation: e.target.value })),
        placeholder: "\u4F8B:\u5DE5\u7A0B\u5E2B\u3001\u8001\u5E2B\u3001\u81EA\u71DF\u5546",
        className: "w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300"
      }
    )), /* @__PURE__ */ React.createElement(Field, { label: "\u96FB\u8A71" }, /* @__PURE__ */ React.createElement(
      "input",
      {
        value: custForm.contact,
        onChange: (e) => setCustForm(__spreadProps(__spreadValues({}, custForm), { contact: e.target.value })),
        className: "w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300"
      }
    ))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-3" }, /* @__PURE__ */ React.createElement(Field, { label: "LINE ID" }, /* @__PURE__ */ React.createElement(
      "input",
      {
        value: custForm.lineId,
        onChange: (e) => setCustForm(__spreadProps(__spreadValues({}, custForm), { lineId: e.target.value })),
        placeholder: "\u4F8B:abc1234",
        className: "w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300"
      }
    )), /* @__PURE__ */ React.createElement(Field, { label: "Email" }, /* @__PURE__ */ React.createElement(
      "input",
      {
        value: custForm.email,
        onChange: (e) => setCustForm(__spreadProps(__spreadValues({}, custForm), { email: e.target.value })),
        className: "w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300"
      }
    ))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-3" }, /* @__PURE__ */ React.createElement(Field, { label: "\u751F\u65E5" }, /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "date",
        value: custForm.birthday,
        onChange: (e) => setCustForm(__spreadProps(__spreadValues({}, custForm), { birthday: e.target.value })),
        className: "w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300"
      }
    )), /* @__PURE__ */ React.createElement(Field, { label: "\u4ECB\u7D39\u4EBA(\u8F49\u4ECB\u7D39\u4F86\u6E90)" }, /* @__PURE__ */ React.createElement(
      "input",
      {
        value: custForm.referredBy,
        onChange: (e) => setCustForm(__spreadProps(__spreadValues({}, custForm), { referredBy: e.target.value })),
        placeholder: "\u4F8B:\u9673\u7F8E\u73B2",
        className: "w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300"
      }
    ))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-3" }, /* @__PURE__ */ React.createElement(Field, { label: "\u8EAB\u5206\u8B49\u5B57\u865F" }, /* @__PURE__ */ React.createElement(
      "input",
      {
        value: custForm.idNumber,
        onChange: (e) => setCustForm(__spreadProps(__spreadValues({}, custForm), { idNumber: e.target.value })),
        placeholder: "\u4F8B:A123456789",
        className: "w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300"
      }
    )), /* @__PURE__ */ React.createElement(Field, { label: "DISC \u6027\u683C" }, /* @__PURE__ */ React.createElement(
      "select",
      {
        value: custForm.discType,
        onChange: (e) => setCustForm(__spreadProps(__spreadValues({}, custForm), { discType: e.target.value })),
        className: "w-full px-3 py-2 text-sm border border-stone-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-emerald-300"
      },
      /* @__PURE__ */ React.createElement("option", { value: "" }, "\u672A\u8A55\u4F30"),
      DISC_TYPES.map((d) => /* @__PURE__ */ React.createElement("option", { key: d.key, value: d.key }, d.label))
    ))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-[140px_1fr] gap-3" }, /* @__PURE__ */ React.createElement(Field, { label: "\u7E23\u5E02" }, /* @__PURE__ */ React.createElement(
      "select",
      {
        value: custForm.addressCity,
        onChange: (e) => setCustForm(__spreadProps(__spreadValues({}, custForm), { addressCity: e.target.value })),
        className: "w-full px-3 py-2 text-sm border border-stone-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-emerald-300"
      },
      /* @__PURE__ */ React.createElement("option", { value: "" }, "\u8ACB\u9078\u64C7"),
      TAIWAN_CITIES.map((city) => /* @__PURE__ */ React.createElement("option", { key: city, value: city }, city))
    )), /* @__PURE__ */ React.createElement(Field, { label: "\u8857\u9053\u5730\u5740" }, /* @__PURE__ */ React.createElement(
      "input",
      {
        value: custForm.addressStreet,
        onChange: (e) => setCustForm(__spreadProps(__spreadValues({}, custForm), { addressStreet: e.target.value })),
        placeholder: "\u4F8B:\u5FE0\u5B5D\u6771\u8DEF\u56DB\u6BB51\u865F",
        className: "w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300"
      }
    ))), /* @__PURE__ */ React.createElement(Field, { label: "\u4FDD\u55AE\u7F3A\u53E3(\u73FE\u6709\u4FDD\u969C\u5206\u6790/\u5EFA\u8B70\u52A0\u4FDD\u65B9\u5411)" }, /* @__PURE__ */ React.createElement(
      "textarea",
      {
        rows: 2,
        value: custForm.policyGap,
        onChange: (e) => setCustForm(__spreadProps(__spreadValues({}, custForm), { policyGap: e.target.value })),
        placeholder: "\u4F8B:\u91AB\u7642\u96AA\u4FDD\u984D\u4E0D\u8DB3\u3001\u7121\u5931\u80FD\u6276\u52A9\u96AA",
        className: "w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300 resize-none"
      }
    )), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-3" }, /* @__PURE__ */ React.createElement(Field, { label: "\u8ECA\u724C\u865F\u78BC" }, /* @__PURE__ */ React.createElement(
      "input",
      {
        value: custForm.licensePlate,
        onChange: (e) => setCustForm(__spreadProps(__spreadValues({}, custForm), { licensePlate: e.target.value })),
        placeholder: "\u4F8B:ABC-1234",
        className: "w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300"
      }
    )), /* @__PURE__ */ React.createElement(Field, { label: "\u8077\u696D\u7B49\u7D1A(\u610F\u5916\u96AA\u6838\u4FDD\u7528)" }, /* @__PURE__ */ React.createElement(
      "select",
      {
        value: custForm.occupationClass,
        onChange: (e) => setCustForm(__spreadProps(__spreadValues({}, custForm), { occupationClass: e.target.value })),
        className: "w-full px-3 py-2 text-sm border border-stone-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-emerald-300"
      },
      /* @__PURE__ */ React.createElement("option", { value: "" }, "\u672A\u8A55\u4F30"),
      OCCUPATION_CLASSES.map((oc) => /* @__PURE__ */ React.createElement("option", { key: oc, value: oc }, oc))
    ))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-3" }, /* @__PURE__ */ React.createElement(Field, { label: "\u7DCA\u6025\u806F\u7D61\u4EBA\u59D3\u540D" }, /* @__PURE__ */ React.createElement(
      "input",
      {
        value: custForm.emergencyContactName,
        onChange: (e) => setCustForm(__spreadProps(__spreadValues({}, custForm), { emergencyContactName: e.target.value })),
        className: "w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300"
      }
    )), /* @__PURE__ */ React.createElement(Field, { label: "\u7DCA\u6025\u806F\u7D61\u4EBA\u96FB\u8A71" }, /* @__PURE__ */ React.createElement(
      "input",
      {
        value: custForm.emergencyContactPhone,
        onChange: (e) => setCustForm(__spreadProps(__spreadValues({}, custForm), { emergencyContactPhone: e.target.value })),
        className: "w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300"
      }
    ))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-[1fr_140px] gap-3" }, /* @__PURE__ */ React.createElement(Field, { label: "\u6700\u65B0\u52D5\u614B" }, /* @__PURE__ */ React.createElement(
      "input",
      {
        value: custForm.lastActivity,
        onChange: (e) => setCustForm(__spreadProps(__spreadValues({}, custForm), { lastActivity: e.target.value })),
        placeholder: "\u4F8B:\u521D\u6B21\u62DC\u8A2A,\u4E0B\u6B21\u8DDF\u9032...",
        className: "w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300"
      }
    )), /* @__PURE__ */ React.createElement(Field, { label: "\u806F\u7E6B\u65E5" }, /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "date",
        value: custForm.lastActivityDate,
        onChange: (e) => setCustForm(__spreadProps(__spreadValues({}, custForm), { lastActivityDate: e.target.value })),
        className: "w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300"
      }
    ))), /* @__PURE__ */ React.createElement(Field, { label: "\u4E0B\u6B21\u8FFD\u8E64\u65E5\u671F" }, /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "date",
        value: custForm.nextFollowUp,
        onChange: (e) => setCustForm(__spreadProps(__spreadValues({}, custForm), { nextFollowUp: e.target.value })),
        className: "w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300"
      }
    )), /* @__PURE__ */ React.createElement(Field, { label: "\u5099\u8A3B(\u5065\u5EB7\u8A3B\u8A18\u7B49)" }, /* @__PURE__ */ React.createElement(
      "textarea",
      {
        rows: 2,
        value: custForm.note,
        onChange: (e) => setCustForm(__spreadProps(__spreadValues({}, custForm), { note: e.target.value })),
        className: "w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300 resize-none"
      }
    )), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2 pt-2" }, /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => setShowCustForm(false), className: "flex-1 py-3 text-sm rounded-lg border border-stone-300 text-stone-600 hover:bg-stone-50" }, "\u53D6\u6D88"), /* @__PURE__ */ React.createElement("button", { type: "submit", className: "flex-1 py-3 text-sm rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-medium" }, editingCustId ? "\u5132\u5B58\u8B8A\u66F4" : "\u65B0\u589E"))))), showPolForm && /* @__PURE__ */ React.createElement("div", { className: "fixed inset-0 bg-stone-900/40 flex items-center justify-center p-4 z-50" }, /* @__PURE__ */ React.createElement("div", { className: "bg-white rounded-xl w-full max-w-md p-6 shadow-xl max-h-[90vh] overflow-y-auto" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between mb-4" }, /* @__PURE__ */ React.createElement("h2", { className: "text-base font-semibold text-stone-800" }, editingPolId ? "\u7DE8\u8F2F\u4FDD\u55AE" : "\u65B0\u589E\u4FDD\u55AE"), /* @__PURE__ */ React.createElement("button", { onClick: () => setShowPolForm(false), className: "p-2 -m-2 text-stone-400 hover:text-stone-700" }, /* @__PURE__ */ React.createElement(X, { size: 20 }))), /* @__PURE__ */ React.createElement("form", { onSubmit: submitPolicy, className: "space-y-3" }, /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-3" }, /* @__PURE__ */ React.createElement(Field, { label: "\u4FDD\u96AA\u5225" }, /* @__PURE__ */ React.createElement(
      "select",
      {
        value: polForm.category,
        onChange: (e) => setPolForm(__spreadProps(__spreadValues({}, polForm), { category: e.target.value })),
        className: "w-full px-3 py-2 text-sm border border-stone-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-emerald-300"
      },
      CATEGORIES.map((c) => /* @__PURE__ */ React.createElement("option", { key: c, value: c }, c))
    )), /* @__PURE__ */ React.createElement(Field, { label: "\u7E73\u8CBB\u983B\u7387" }, /* @__PURE__ */ React.createElement(
      "select",
      {
        value: polForm.payFreq,
        onChange: (e) => setPolForm(__spreadProps(__spreadValues({}, polForm), { payFreq: e.target.value })),
        className: "w-full px-3 py-2 text-sm border border-stone-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-emerald-300"
      },
      PAY_FREQ.map((f) => /* @__PURE__ */ React.createElement("option", { key: f, value: f }, f))
    ))), /* @__PURE__ */ React.createElement(Field, { label: "\u96AA\u7A2E\u540D\u7A31 * (\u4F8B:\u91AB\u7642\u96AA\u3001\u8ECA\u96AA)" }, /* @__PURE__ */ React.createElement(
      "input",
      {
        required: true,
        value: polForm.type,
        onChange: (e) => setPolForm(__spreadProps(__spreadValues({}, polForm), { type: e.target.value })),
        className: "w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300"
      }
    )), /* @__PURE__ */ React.createElement(Field, { label: "\u4FDD\u96AA\u516C\u53F8" }, /* @__PURE__ */ React.createElement(
      "input",
      {
        value: polForm.company,
        onChange: (e) => setPolForm(__spreadProps(__spreadValues({}, polForm), { company: e.target.value })),
        className: "w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300"
      }
    )), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-3" }, /* @__PURE__ */ React.createElement(Field, { label: "\u4FDD\u984D" }, /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "number",
        value: polForm.insuredAmount,
        onChange: (e) => setPolForm(__spreadProps(__spreadValues({}, polForm), { insuredAmount: e.target.value })),
        className: "w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300"
      }
    )), /* @__PURE__ */ React.createElement(Field, { label: "\u4FDD\u8CBB" }, /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "number",
        value: polForm.premium,
        onChange: (e) => setPolForm(__spreadProps(__spreadValues({}, polForm), { premium: e.target.value })),
        className: "w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300"
      }
    ))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-3" }, /* @__PURE__ */ React.createElement(Field, { label: "\u751F\u6548\u65E5" }, /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "date",
        value: polForm.effectiveDate,
        onChange: (e) => setPolForm(__spreadProps(__spreadValues({}, polForm), { effectiveDate: e.target.value })),
        className: "w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300"
      }
    )), /* @__PURE__ */ React.createElement(Field, { label: polForm.category === "\u7522\u96AA" ? "\u5230\u671F\u65E5(\u5230\u671F\u524D1\u500B\u6708\u63D0\u9192)" : "\u4FDD\u55AE\u5230\u671F\u65E5(\u5230\u671F\u524D1\u5E74\u63D0\u9192)" }, /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "date",
        value: polForm.nextDueDate,
        onChange: (e) => setPolForm(__spreadProps(__spreadValues({}, polForm), { nextDueDate: e.target.value })),
        className: "w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300"
      }
    ))), polForm.category === "\u58FD\u96AA" && /* @__PURE__ */ React.createElement(Field, { label: "\u7E73\u8CBB\u65E5(\u7E73\u8CBB\u524D1\u500B\u6708\u63D0\u9192)" }, /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "date",
        value: polForm.paymentDate,
        onChange: (e) => setPolForm(__spreadProps(__spreadValues({}, polForm), { paymentDate: e.target.value })),
        className: "w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300"
      }
    )), /* @__PURE__ */ React.createElement(Field, { label: "\u88AB\u4FDD\u96AA\u4EBA(\u82E5\u8207\u8981\u4FDD\u4EBA\u4E0D\u540C)" }, /* @__PURE__ */ React.createElement(
      "input",
      {
        value: polForm.insured,
        onChange: (e) => setPolForm(__spreadProps(__spreadValues({}, polForm), { insured: e.target.value })),
        placeholder: "\u9810\u8A2D\u540C\u8981\u4FDD\u4EBA",
        className: "w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300"
      }
    )), /* @__PURE__ */ React.createElement(Field, { label: "\u53D7\u76CA\u4EBA" }, /* @__PURE__ */ React.createElement(
      "input",
      {
        value: polForm.beneficiary,
        onChange: (e) => setPolForm(__spreadProps(__spreadValues({}, polForm), { beneficiary: e.target.value })),
        className: "w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300"
      }
    )), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-3" }, /* @__PURE__ */ React.createElement(Field, { label: "\u968E\u6BB5" }, /* @__PURE__ */ React.createElement(
      "select",
      {
        value: polForm.stage,
        onChange: (e) => setPolForm(__spreadProps(__spreadValues({}, polForm), { stage: e.target.value })),
        className: "w-full px-3 py-2 text-sm border border-stone-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-emerald-300"
      },
      STAGES.map((s) => /* @__PURE__ */ React.createElement("option", { key: s.key, value: s.key }, s.label))
    )), /* @__PURE__ */ React.createElement(Field, { label: "\u4F63\u91D1(\u6210\u4EA4\u5F8C)" }, /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "number",
        value: polForm.commission,
        onChange: (e) => setPolForm(__spreadProps(__spreadValues({}, polForm), { commission: e.target.value })),
        className: "w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300"
      }
    ))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-3" }, /* @__PURE__ */ React.createElement(Field, { label: "\u8ACB\u6B3E/\u6536\u6B3E\u9032\u5EA6" }, /* @__PURE__ */ React.createElement(
      "select",
      {
        value: polForm.billingStatus,
        onChange: (e) => setPolForm(__spreadProps(__spreadValues({}, polForm), { billingStatus: e.target.value })),
        className: "w-full px-3 py-2 text-sm border border-stone-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-emerald-300"
      },
      BILLING_STATUS.map((b) => /* @__PURE__ */ React.createElement("option", { key: b.key, value: b.key }, b.key))
    )), /* @__PURE__ */ React.createElement(Field, { label: "\u8ACB\u6B3E\u65E5\u671F" }, /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "date",
        value: polForm.invoiceDate,
        onChange: (e) => setPolForm(__spreadProps(__spreadValues({}, polForm), { invoiceDate: e.target.value })),
        className: "w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300"
      }
    ))), /* @__PURE__ */ React.createElement(Field, { label: "\u4FDD\u55AE PDF \u9644\u4EF6(\u5B58\u653E\u6A94\u6848\u7528,\u4E0D\u6703\u81EA\u52D5\u8B80\u53D6\u5167\u5BB9)" }, polForm.attachmentName ? /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between gap-2 text-xs bg-stone-50 border border-stone-200 rounded-lg px-3 py-2" }, /* @__PURE__ */ React.createElement("span", { className: "text-stone-600 truncate" }, polForm.attachmentName), /* @__PURE__ */ React.createElement("button", { type: "button", onClick: removePolicyAttachment, className: "text-rose-600 shrink-0 underline" }, "\u79FB\u9664")) : /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "file",
        accept: "application/pdf",
        onChange: handlePolicyAttachment,
        className: "w-full text-xs text-stone-500 border border-stone-300 rounded-lg px-3 py-2.5"
      }
    )), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2 pt-2" }, /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => setShowPolForm(false), className: "flex-1 py-3 text-sm rounded-lg border border-stone-300 text-stone-600 hover:bg-stone-50" }, "\u53D6\u6D88"), /* @__PURE__ */ React.createElement("button", { type: "submit", className: "flex-1 py-3 text-sm rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-medium" }, editingPolId ? "\u5132\u5B58\u8B8A\u66F4" : "\u65B0\u589E\u4FDD\u55AE"))))));
  }
  function PillGroup({ value, onToggle, options }) {
    return /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3 flex-wrap" }, options.map((o) => {
      const active = o.key === "\u5168\u90E8" ? value.length === 0 : value.includes(o.key);
      return /* @__PURE__ */ React.createElement(
        "button",
        {
          key: o.key,
          onClick: () => onToggle(o.key),
          className: `flex items-center gap-1.5 text-xs px-3 py-2 rounded-full border transition-colors ${active ? "bg-emerald-700 border-emerald-700 text-white" : "bg-white border-stone-300 text-stone-600 hover:bg-stone-100"}`
        },
        /* @__PURE__ */ React.createElement("span", { className: `w-1.5 h-1.5 rounded-full ${active ? "bg-white" : "bg-stone-300"}` }),
        o.label
      );
    }));
  }
  function StatCard({ icon, label, value, prefix = "", suffix = "", accent, sub }) {
    return /* @__PURE__ */ React.createElement("div", { className: "bg-white border border-stone-200 rounded-xl p-4" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-1.5 text-stone-400 text-xs mb-2" }, icon, " ", label), /* @__PURE__ */ React.createElement("div", { className: `text-lg font-serif font-semibold ${accent || "text-stone-800"}` }, prefix, value, suffix), sub && /* @__PURE__ */ React.createElement("div", { className: "text-xs text-stone-400 mt-0.5" }, sub));
  }
  function Field({ label, children }) {
    return /* @__PURE__ */ React.createElement("label", { className: "block" }, /* @__PURE__ */ React.createElement("span", { className: "block text-xs font-medium text-stone-500 mb-1" }, label), children);
  }
  ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(InsuranceTracker));
})();
