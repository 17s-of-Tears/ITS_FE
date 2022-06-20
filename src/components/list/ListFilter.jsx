import Selector from '@/components/common/Selector'
import { KindOptions, SkillOptions, SortOptions } from '@/constant/selectData'
import { ListFilterContainer } from './ListFilter.styled'

const ListFilter = () => {
	return (
		<ListFilterContainer>
			<div className="filter-top">
				<div className="filter-top__title">
					<h2>검색 필터</h2>
					<span className="filter-top__title--sub">&nbsp;|&nbsp;Filter</span>
				</div>
			</div>
			<div className="filter-group">
				<div className="filter-group--left">
					<Selector options={KindOptions} disabledOption="종류" icon />
					<Selector options={SkillOptions} disabledOption="언어" icon />
				</div>
				<div className="filter-group--right">
					<Selector options={SortOptions} disabledOption="정렬" icon />
				</div>
			</div>
		</ListFilterContainer>
	)
}

export default ListFilter
