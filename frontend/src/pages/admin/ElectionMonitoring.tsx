import { useState } from "react";
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RefreshCw, AlertTriangle, Monitor, EyeOff } from "lucide-react";

type Device = {
	id: string;
	location: string;
	status: "active" | "flagged";
	lastSeen: string;
};

const mockDevices: Device[] = [
	{ id: "DEV-001", location: "CS Lab 1", status: "active", lastSeen: "2 min ago" },
	{ id: "DEV-002", location: "Library", status: "flagged", lastSeen: "5 min ago" },
	{ id: "DEV-003", location: "Admin Block", status: "active", lastSeen: "1 min ago" },
];

const mockVotes = {
	totalVotes: 850,
	liveTally: [
		{ office: "President", candidate: "Alice Smith", votes: 420 },
		{ office: "President", candidate: "Bob Johnson", votes: 430 },
	],
};

const ElectionMonitoring = () => {
	const [devices, setDevices] = useState<Device[]>(mockDevices);

	const handleFlagToggle = (id: string) => {
		setDevices((prev) =>
			prev.map((d) =>
				d.id === id
					? { ...d, status: d.status === "flagged" ? "active" : "flagged" }
					: d
			)
		);
	};

	// In real implementation, useEffect to poll backend for updates

	return (
		<div className="min-h-screen bg-background py-10">
			<div className="container mx-auto px-4">
				<h1 className="text-3xl font-bold mb-8 text-foreground">
					Election Monitoring
				</h1>
				{/* Live Vote Tally */}
				<Card className="mb-8">
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<Monitor className="h-5 w-5 text-primary" />
							Live Vote Tally
						</CardTitle>
						<CardDescription>
							Real-time votes as recorded on the blockchain ledger.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="mb-4">
							<span className="font-semibold">Total Votes Cast:</span>{" "}
							<Badge variant="default">{mockVotes.totalVotes}</Badge>
							<Button variant="outline" size="sm" className="ml-4">
								<RefreshCw className="h-4 w-4 mr-1" />
								Refresh
							</Button>
						</div>
						<table className="min-w-full border text-sm">
							<thead>
								<tr className="bg-muted">
									<th className="p-2 border">Office</th>
									<th className="p-2 border">Candidate</th>
									<th className="p-2 border">Votes</th>
								</tr>
							</thead>
							<tbody>
								{mockVotes.liveTally.map((row, idx) => (
									<tr key={idx}>
										<td className="p-2 border">{row.office}</td>
										<td className="p-2 border">{row.candidate}</td>
										<td className="p-2 border">{row.votes}</td>
									</tr>
								))}
							</tbody>
						</table>
					</CardContent>
				</Card>

				{/* Device Tracking */}
				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<Monitor className="h-5 w-5 text-accent" />
							Voting Device Tracking
						</CardTitle>
						<CardDescription>
							Track all devices currently participating in the election.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<table className="min-w-full border text-sm">
							<thead>
								<tr className="bg-muted">
									<th className="p-2 border">Device ID</th>
									<th className="p-2 border">Location</th>
									<th className="p-2 border">Status</th>
									<th className="p-2 border">Last Seen</th>
									<th className="p-2 border">Actions</th>
								</tr>
							</thead>
							<tbody>
								{devices.map((device) => (
									<tr
										key={device.id}
										className={
											device.status === "flagged" ? "bg-red-100" : ""
										}
									>
										<td className="p-2 border">{device.id}</td>
										<td className="p-2 border">{device.location}</td>
										<td className="p-2 border">
											{device.status === "flagged" ? (
												<Badge variant="destructive">
													<AlertTriangle className="h-4 w-4 mr-1" />
													Flagged
												</Badge>
											) : (
												<Badge variant="default">Active</Badge>
											)}
										</td>
										<td className="p-2 border">{device.lastSeen}</td>
										<td className="p-2 border">
											<Button
												size="sm"
												variant={
													device.status === "flagged"
														? "outline"
														: "destructive"
												}
												onClick={() => handleFlagToggle(device.id)}
											>
												{device.status === "flagged" ? (
													<>
														<EyeOff className="h-4 w-4 mr-1" />
														Unflag
													</>
												) : (
													<>
														<AlertTriangle className="h-4 w-4 mr-1" />
														Flag
													</>
												)}
											</Button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default ElectionMonitoring;