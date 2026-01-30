import React, { useMemo, useState } from "react";
import AdminLayout from "../components/AdminLayout";

const AdminOffers = () => {
  const [offers, setOffers] = useState([
    {
      id: 1,
      title: "Summer Construction Special",
      description: "Get 15% off on all residential construction projects",
      discountType: "percentage",
      discountValue: 15,
      code: "SUMMER15",
      validFrom: "2026-06-01",
      validUntil: "2026-08-31",
      status: "active",
      category: "Residential",
      minAmount: 50000,
      maxDiscount: 10000,
      usedCount: 12,
      totalLimit: 50,
    },
    {
      id: 2,
      title: "New Client Welcome Offer",
      description: "First-time clients get flat $5,000 discount",
      discountType: "fixed",
      discountValue: 5000,
      code: "WELCOME5K",
      validFrom: "2026-01-01",
      validUntil: "2026-12-31",
      status: "active",
      category: "All Projects",
      minAmount: 100000,
      maxDiscount: 5000,
      usedCount: 22,
      totalLimit: 150,
    },
    {
      id: 3,
      title: "Commercial Mega Deal",
      description: "20% off on commercial construction contracts",
      discountType: "percentage",
      discountValue: 20,
      code: "MEGA20",
      validFrom: "2026-03-01",
      validUntil: "2026-05-31",
      status: "expired",
      category: "Commercial",
      minAmount: 200000,
      maxDiscount: 50000,
      usedCount: 30,
      totalLimit: 30,
    },
    {
      id: 4,
      title: "Renovation Boost Offer",
      description: "10% discount on renovation services",
      discountType: "percentage",
      discountValue: 10,
      code: "RENOV10",
      validFrom: "2026-02-01",
      validUntil: "2026-12-31",
      status: "active",
      category: "Renovation",
      minAmount: 25000,
      maxDiscount: 8000,
      usedCount: 19,
      totalLimit: 80,
    },
    {
      id: 5,
      title: "Early Bird Booking",
      description: "Book 3 months early and save $3,000",
      discountType: "fixed",
      discountValue: 3000,
      code: "EARLY3K",
      validFrom: "2026-01-15",
      validUntil: "2026-03-15",
      status: "scheduled",
      category: "All Projects",
      minAmount: 75000,
      maxDiscount: 3000,
      usedCount: 0,
      totalLimit: 40,
    },
    {
      id: 6,
      title: "Luxury Villa Package",
      description: "Exclusive 12% off luxury villa builds",
      discountType: "percentage",
      discountValue: 12,
      code: "VILLA12",
      validFrom: "2026-04-01",
      validUntil: "2026-09-30",
      status: "active",
      category: "Residential",
      minAmount: 150000,
      maxDiscount: 25000,
      usedCount: 6,
      totalLimit: 25,
    },
    {
      id: 7,
      title: "Festive Season Deal",
      description: "Special festive discount on all services",
      discountType: "percentage",
      discountValue: 8,
      code: "FESTIVE8",
      validFrom: "2026-10-01",
      validUntil: "2026-11-15",
      status: "scheduled",
      category: "All Projects",
      minAmount: 40000,
      maxDiscount: 7000,
      usedCount: 0,
      totalLimit: 100,
    },
    {
      id: 8,
      title: "Bulk Commercial Contract",
      description: "Flat $15,000 off large-scale commercial builds",
      discountType: "fixed",
      discountValue: 15000,
      code: "BULK15K",
      validFrom: "2026-05-01",
      validUntil: "2026-12-31",
      status: "active",
      category: "Commercial",
      minAmount: 300000,
      maxDiscount: 15000,
      usedCount: 9,
      totalLimit: 20,
    },
  ]);

  const [filterStatus, setFilterStatus] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");
  const [search, setSearch] = useState("");

  const formatMoney = (v) =>
    v.toLocaleString("en-US", { style: "currency", currency: "USD" });

  const getRealStatus = (o) => {
    const now = new Date();
    if (now < new Date(o.validFrom)) return "scheduled";
    if (now > new Date(o.validUntil)) return "expired";
    return o.status === "paused" ? "paused" : "active";
  };

  const filteredOffers = useMemo(() => {
    return offers.filter((o) => {
      const status = getRealStatus(o);
      return (
        (filterStatus === "all" || status === filterStatus) &&
        (filterCategory === "all" || o.category === filterCategory) &&
        (o.title.toLowerCase().includes(search.toLowerCase()) ||
          o.code.toLowerCase().includes(search.toLowerCase()))
      );
    });
  }, [offers, filterStatus, filterCategory, search]);

  return (
    <AdminLayout>
      <div className="flex h-screen flex-col gap-6">

        {/* header */}
        <div className="flex justify-between flex-wrap gap-3">
          <div>
            <h1 className="text-2xl font-bold text-[#1e293b]">
              Offers & Promotions
            </h1>
            <p className="text-[#64748b]">
              Manage discount campaigns and promotions
            </p>
          </div>

          <button className="rounded-lg bg-[#f59e0b] px-6 py-3 font-semibold text-white hover:bg-[#d97706] transition">
            Create New Offer
          </button>
        </div>

        {/* search */}
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by title or code..."
          className="rounded-lg border-2 border-[#e2e8f0] px-4 py-3 outline-none focus:border-[#f59e0b]"
        />

        {/* offers */}
        <div className="flex flex-col overflow-auto gap-4">
          {filteredOffers.map((offer) => {
            const status = getRealStatus(offer);

            return (
              <div
                key={offer.id}
                className="rounded-xl bg-white p-6 shadow hover:shadow-lg transition flex flex-col lg:flex-row gap-6 border-l-4 border-[#f59e0b]"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bold text-lg text-[#1e293b]">
                      {offer.title}
                    </h3>
                    <span className="bg-[#fef3c7] text-[#d97706] px-3 py-1 rounded-md text-xs font-semibold capitalize">
                      {status}
                    </span>
                  </div>

                  <p className="text-[#64748b] mb-3">{offer.description}</p>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
                    <div>Discount: <b>{offer.discountType === "percentage" ? `${offer.discountValue}%` : formatMoney(offer.discountValue)}</b></div>
                    <div>Code: <b>{offer.code}</b></div>
                    <div>Min: <b>{formatMoney(offer.minAmount)}</b></div>
                    <div>Max: <b>{formatMoney(offer.maxDiscount)}</b></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </AdminLayout>
  );
};

export default AdminOffers;