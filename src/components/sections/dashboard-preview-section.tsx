"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, LineChart as LucideLineChart, Activity, ShieldAlert, ListChecks, Users, Server, Clock } from "lucide-react"; // Renamed LineChart to LucideLineChart
import { ResponsiveContainer, BarChart as RechartsBarChart, LineChart as RechartsLineChart, XAxis, YAxis, Tooltip, Legend, Bar, Line, CartesianGrid } from "recharts"; // Explicitly import from recharts
import { useTheme } from "next-themes"; // Assuming you might use next-themes for actual dark/light mode switching

const chartData = [
  { name: 'Jan', transactions: 4000, risk: 2400, health: 0.85 },
  { name: 'Feb', transactions: 3000, risk: 1398, health: 0.78 },
  { name: 'Mar', transactions: 2000, risk: 9800, health: 0.92 },
  { name: 'Apr', transactions: 2780, risk: 3908, health: 0.60 },
  { name: 'May', transactions: 1890, risk: 4800, health: 0.88 },
  { name: 'Jun', transactions: 2390, risk: 3800, health: 0.95 },
];

const agentLogsData = [
  { id: 1, agent: "Chimera", action: "High-risk transaction flagged", timestamp: "10:35:12 AM", level: "WARN" },
  { id: 2, agent: "Synapse", action: "Gateway B rerouted to A", timestamp: "10:34:58 AM", level: "INFO" },
  { id: 3, agent: "Cerebrum", action: "Policy 'LowValueInternational' applied", timestamp: "10:34:05 AM", level: "INFO" },
  { id: 4, agent: "Abacus", action: "Settlement discrepancy detected", timestamp: "10:33:40 AM", level: "ERROR" },
  { id: 5, agent: "Persona", action: "User trust score updated: 0.85", timestamp: "10:32:15 AM", level: "INFO" },
];

const MetricCard = ({ title, value, icon: Icon, trend, unit, description, colorClass = "text-accent" }: { title: string, value: string | number, icon: React.ElementType, trend?: string, unit?: string, description?: string, colorClass?: string }) => (
  <Card className="bg-card/70 border-border/70 backdrop-blur-sm glassmorphism">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
      <Icon className={`h-5 w-5 ${colorClass}`} />
    </CardHeader>
    <CardContent>
      <div className={`text-3xl font-bold ${colorClass}`}>{value}{unit && <span className="text-xl">{unit}</span>}</div>
      {trend && <p className={`text-xs ${trend.startsWith('+') ? 'text-emerald-500' : 'text-red-500'}`}>{trend}</p>}
      {description && <p className="text-xs text-muted-foreground mt-1">{description}</p>}
    </CardContent>
  </Card>
);


export default function DashboardPreviewSection() {
  // const { theme } = useTheme(); // For actual theme switching if needed
  // Forcing dark theme for charts as per design
  const chartStrokeColor = "hsl(var(--muted-foreground))"; 
  const chartGridColor = "hsl(var(--border))";
  const primaryChartColor = "hsl(var(--primary))";
  const accentChartColor = "hsl(var(--accent))";


  return (
    <section id="dashboard" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-headline">
            Real-Time <span className="text-glow-accent">Financial Intelligence</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Gain unparalleled visibility into your payment operations with our interactive dashboard. Monitor key metrics, agent activity, and system health at a glance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <MetricCard title="Total Transactions" value="1.2M" icon={Activity} trend="+5.2% last month" colorClass="text-primary"/>
            <MetricCard title="Fraud Risk Score" value="0.12" icon={ShieldAlert} trend="-0.03 last 24h" unit="" description="Lower is better" colorClass="text-glow-emerald"/>
            <MetricCard title="Overall Health" value="98.7" icon={LucideLineChart} trend="+1.1% last 7d" unit="%" colorClass="text-accent" />
            <MetricCard title="Active Agents" value="9" icon={Users} description="Continuously Optimizing" colorClass="text-primary"/>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 bg-card/70 border-border/70 backdrop-blur-sm glassmorphism">
            <CardHeader>
              <CardTitle className="text-xl text-foreground/90 flex items-center"><BarChart className="mr-2 h-6 w-6 text-primary" /> Transaction Volume & Risk</CardTitle>
            </CardHeader>
            <CardContent className="h-[350px] md:h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke={chartGridColor} />
                  <XAxis dataKey="name" stroke={chartStrokeColor} fontSize={12} />
                  <YAxis stroke={chartStrokeColor} fontSize={12} />
                  <Tooltip
                    contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "var(--radius)"}}
                    labelStyle={{ color: "hsl(var(--foreground))" }}
                    itemStyle={{ color: "hsl(var(--foreground))" }}
                  />
                  <Legend wrapperStyle={{fontSize: "12px"}}/>
                  <Bar dataKey="transactions" fill={primaryChartColor} name="Transactions" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="risk" fill={accentChartColor} name="Risk Score (x100)" radius={[4, 4, 0, 0]} />
                </RechartsBarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/70 backdrop-blur-sm glassmorphism">
            <CardHeader>
              <CardTitle className="text-xl text-foreground/90 flex items-center"><ListChecks className="mr-2 h-6 w-6 text-accent" /> Agent Logs</CardTitle>
            </CardHeader>
            <CardContent className="h-[350px] md:h-[400px] overflow-y-auto space-y-3 pr-2">
              {agentLogsData.map((log) => (
                <div key={log.id} className="text-xs p-2.5 rounded-md border border-border/50 bg-background/50 hover:bg-muted/20 transition-colors">
                  <div className="flex justify-between items-center mb-0.5">
                    <span className={`font-semibold ${
                      log.level === "ERROR" ? "text-destructive" :
                      log.level === "WARN" ? "text-yellow-400" : // Using Tailwind yellow as no direct theme variable
                      "text-primary"
                    }`}>
                      {log.agent} <span className="font-normal text-muted-foreground">({log.level})</span>
                    </span>
                    <span className="text-muted-foreground/80">{log.timestamp}</span>
                  </div>
                  <p className="text-foreground/90">{log.action}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <MetricCard title="Routing Logic Efficiency" value="99.2" icon={Server} trend="+0.5% vs heuristic" unit="%" description="Based on A/B tests" colorClass="text-glow-cyan"/>
            <MetricCard title="Avg. Detection Time" value="45" icon={Clock} trend="-5ms last update" unit="ms" description="For critical alerts" colorClass="text-glow-emerald"/>
        </div>
      </div>
    </section>
  );
}
