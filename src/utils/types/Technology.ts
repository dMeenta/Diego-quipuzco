export type DevSide = 'front' | 'back' | 'tool'
export type SkillLvl = 'basic' | 'intermediate' | 'advanced'

export default interface Technology {
	devSide: DevSide
	name: string
	slug: string
	hexColor: string
	lvl: SkillLvl
}
