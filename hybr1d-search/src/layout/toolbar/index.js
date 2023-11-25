import { useContext } from 'react'
import DropDown from '../../components/dropdown'
import { SearchContext } from '../../state/SearchContext'

export default function ToolBar() {
    const { selectedTag, setSelectedTag } = useContext(SearchContext)
    return (
        <div className="toolbar-wrapper">
            <DropDown
                label="Tag"
                dropdownList={[
                    { label: 'Story', value: 'story' },
                    { label: 'Comment', value: 'comment' },
                    { label: 'Poll', value: 'poll' },
                    { label: 'Poll Opt', value: 'pollopt' },
                    { label: 'Show HN', value: 'show_hn' },
                    { label: 'Ask HN', value: 'ask_hn' },
                    { label: 'Front Page', value: 'front_page' },
                ]}
                value={selectedTag}
                handleChange={(e) => setSelectedTag(e.target.value)}
            />
        </div>
    )
}
