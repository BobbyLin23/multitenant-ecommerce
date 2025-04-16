import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'
import { Textarea } from '@/components/ui/textarea'

export default function Home() {
  return (
    <div className="flex flex-col gap-y-2 p-2">
      <div>
        <Button variant="elevated">I am an Elevated Button</Button>
      </div>
      <div>
        <Input />
      </div>
      <div>
        <Textarea />
      </div>
      <div>
        <Progress value={50} />
      </div>
      <div>
        <Checkbox />
      </div>
    </div>
  )
}
