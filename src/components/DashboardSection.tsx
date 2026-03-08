import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const trialData = [
  { phase: "Screening", enrolled: 120, target: 150 },
  { phase: "Phase I", enrolled: 95, target: 100 },
  { phase: "Phase II", enrolled: 210, target: 250 },
  { phase: "Phase III", enrolled: 480, target: 500 },
];

const qualityData = [
  { week: "W1", score: 82 },
  { week: "W2", score: 85 },
  { week: "W3", score: 88 },
  { week: "W4", score: 91 },
  { week: "W5", score: 89 },
  { week: "W6", score: 94 },
  { week: "W7", score: 96 },
  { week: "W8", score: 97 },
];

const DashboardSection = () => (
  <section className="section-padding bg-navy">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <p className="text-sm uppercase tracking-[0.25em] text-teal font-semibold mb-3">
          Powerful Information
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Insights at a Glance
        </h2>
        <p className="text-primary-foreground/60 max-w-2xl mx-auto">
          From clinical trial enrollment tracking to data quality monitoring — our outputs give you clarity and confidence.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Bar Chart — Trial Progress */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-navy-light rounded-2xl border border-primary-foreground/10 p-6 md:p-8"
        >
          <h3 className="font-display text-lg font-semibold text-primary-foreground mb-1">
            Clinical Trial Enrollment
          </h3>
          <p className="text-sm text-primary-foreground/50 mb-6">Enrolled vs. Target by Phase</p>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={trialData} barGap={4}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(215 40% 25%)" />
                <XAxis dataKey="phase" tick={{ fill: "hsl(215 20% 65%)", fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "hsl(215 20% 65%)", fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    background: "hsl(215 50% 10%)",
                    border: "1px solid hsl(215 40% 25%)",
                    borderRadius: 8,
                    color: "hsl(210 40% 98%)",
                    fontSize: 13,
                  }}
                />
                <Bar dataKey="target" fill="hsl(215 40% 25%)" radius={[6, 6, 0, 0]} name="Target" />
                <Bar dataKey="enrolled" fill="hsl(175 65% 40%)" radius={[6, 6, 0, 0]} name="Enrolled" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Line Chart — Quality Score */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-navy-light rounded-2xl border border-primary-foreground/10 p-6 md:p-8"
        >
          <h3 className="font-display text-lg font-semibold text-primary-foreground mb-1">
            Data Quality Score
          </h3>
          <p className="text-sm text-primary-foreground/50 mb-6">Weekly DQ trend (% compliant)</p>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={qualityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(215 40% 25%)" />
                <XAxis dataKey="week" tick={{ fill: "hsl(215 20% 65%)", fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis domain={[75, 100]} tick={{ fill: "hsl(215 20% 65%)", fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    background: "hsl(215 50% 10%)",
                    border: "1px solid hsl(215 40% 25%)",
                    borderRadius: 8,
                    color: "hsl(210 40% 98%)",
                    fontSize: 13,
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="hsl(175 65% 40%)"
                  strokeWidth={3}
                  dot={{ fill: "hsl(175 65% 40%)", r: 5 }}
                  activeDot={{ r: 7, fill: "hsl(175 50% 55%)" }}
                  name="Quality %"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default DashboardSection;
