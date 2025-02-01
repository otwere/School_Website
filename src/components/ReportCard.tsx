import type React from "react"
import { GraduationCap, MessageSquare, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "lucide-react"

interface ReportCardProps {
  reportData: {
    studentName: string
    grade: string
    term: string
    subjects: Array<{
      name: string
      grade: string
      score: number
    }>
    gpa: number
    teacherComments: string
    principalComments: string
  }
}

const ReportCard: React.FC<ReportCardProps> = ({ reportData }) => {
  return (
    <div className="border rounded-lg p-4 w-full">
      <div className="flex items-center gap-2 border-b pb-2">
        <GraduationCap className="w-6 h-6" />
        <h2 className="text-lg font-bold">Academic Report Card</h2>
      </div>
      <p className="text-sm text-gray-600">
        {reportData.studentName} - {reportData.grade} - {reportData.term}
      </p>
      <div className="mt-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Subject</TableHead>
              <TableHead>Grade</TableHead>
              <TableHead>Score</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reportData.subjects.map((subject, index) => (
              <TableRow key={index}>
                <TableCell>{subject.name}</TableCell>
                <TableCell>{subject.grade}</TableCell>
                <TableCell>{subject.score}%</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="mt-4 font-semibold">GPA: {reportData.gpa}</div>
      <div className="mt-4 flex items-start gap-2">
        <MessageSquare className="w-5 h-5" />
        <div>
          <h4 className="font-semibold">Teacher's Comments:</h4>
          <p>{reportData.teacherComments}</p>
        </div>
      </div>
      <div className="mt-4 flex items-start gap-2">
        <MessageSquare className="w-5 h-5" />
        <div>
          <h4 className="font-semibold">Principal's Comments:</h4>
          <p>{reportData.principalComments}</p>
        </div>
      </div>
    </div>
  )
}

export default ReportCard
