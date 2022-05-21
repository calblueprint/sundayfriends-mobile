import * as React from 'react';
import { useRef } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Pressable, Button, Modal, Image, ScrollView} from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import { getAllTransactions } from '../../firebase/firestore/transaction';
import { useEffect, useState, useContext } from 'react';
import ViewContainer from '../../components/ViewContainer';
import { Divider, Title } from 'react-native-paper';
import styles from './styles';
import {customStyles} from './styles';
import globalStyles from "../../globalStyles";
import {moment} from 'moment';
import RBSheet from 'react-native-raw-bottom-sheet';
import StepIndicator from 'react-native-step-indicator';
import { getAllTiers } from '../../firebase/firestore/tiers';
import { getUser } from '../../firebase/firestore/user';
import { AuthenticatedUserContext } from '../../context/userContext';
import { User } from '../../types/schema';
import {List} from 'react-native-paper';
import TransactionsGroup from '../../components/TransactionsGroup/TransactionsGroup';
import { getFamilyById } from "../../firebase/firestore/family";
import SvgIcon from '../../../assets/SvgIcon';
import LearnMoreModal from '../../components/LearnMoreModal/LearnMoreModal';

const getCurrentDate=()=>{
    var moment = require('moment');
    return (moment().format('dddd[,] MMMM Do')); 
}

const defaultUser: User = {
    user_id: "",
    address: "",
    created_at: "",
    email: "",
    role: "",
    family_id: 0,
    full_name: "",
    last_active: new Date(),
    parent: false,
    points: 0,
    reward_eligible: false,
    suspended: false,
    phone_number: "",
    transactions: [],
  };



const FamilyScreen = ({navigation}: any) => {

    const [labels, setLabels] = useState(['1000', '2000', '3000']);
    const [tierDescriptions, setTierDescriptions] = useState([""]);
    const { userUID, setUserUID } = useContext(AuthenticatedUserContext);
    const [user, setUser] = useState(defaultUser);
    const [familyName, setFamilyName] = useState("");
    const [userInitial, setuserInitial] = useState("");
    const [familyBalance, setFamilyBalance] = useState(0);
    const [familyMembers, setFamilyMembers] = useState([defaultUser]);
    const [tierStep, settierStep] = useState(0);
    const [tierName, settierName] = useState("");
    const [toggleExpanded, setToggleExpanded] = useState(false);
    const [dropdownExpanded, setDropdownExpanded] = useState(false);
    const refRBSheet = useRef();

    useEffect(() => {
        getAllTiers().then((tiers) => {
            const newlabels = [];
            newlabels[0] = tiers[0].tier1.toString();
            newlabels[1] = tiers[0].tier2.toString();
            newlabels[2] = tiers[0].tier3.toString();
            const newDescriptions = [];
            newDescriptions[0] = tiers[0].tier1description;
            newDescriptions[1] = tiers[0].tier2description;
            newDescriptions[2] = tiers[0].tier3description;
            setLabels(newlabels);
            setTierDescriptions(newDescriptions);

            getUser(userUID).then((currUser) => {
                setUser(currUser);
                // fetchFamilyData();
                getFamilyById(currUser.family_id.toString()).then((currFam) => {
                    setFamilyName(currFam.family_name.toString())
                    setuserInitial(currUser.full_name.toString().slice(0,1))
                    setFamilyBalance(currFam.total_points)
                    setFamilyMembers(currFam.user_ids)
                    console.log(familyName)
                })
            })
            if (familyBalance < tiers[0].tier1){
                settierStep(0)
                settierName("Tier 1: " + tiers[0].tier1title)
            }
            if (familyBalance >= tiers[0].tier2 && familyBalance < tiers[0].tier3){
                settierStep(1)
                console.log(tiers[0].tier2title)
                settierName("Tier 2: " + tiers[0].tier2title)
            }
            if (familyBalance >= tiers[0].tier3){
                settierStep(2)
                settierName("Tier 3: " + tiers[0].tier3title)
            }
        })
    }, []);

    const tierToggle = () => {
        if (!toggleExpanded) {
            return (
                <View style={styles.buttomBar}>
                    <View  style={styles.tierContainer}>
                        <View style={styles.tierBox}>
                            <Text style={[styles.tierText, {color: "#253C85"}]}>{tierName}</Text>
                        </View>
                        
                        <Pressable onPress={() => setToggleExpanded(!toggleExpanded)}
                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed
                                ? 'black'
                                : '#F6F6F6'
                            },
                            styles.toggleButton
                            ]}>
                            <Text style={[globalStyles.body2Bold, {color: '#A9A9A9', marginTop: 2}]}>What Can I Get?</Text>
                            <SvgIcon type="chevron_down"></SvgIcon>
                        </Pressable>
                    </View>
                </View>
            )
        } else {
            return (
                <View style={styles.tierList}>
                    <View style={styles.tierBox}>
                        <Text style={[styles.tierText, {color: "#253C85"}]}>{tierName}</Text>
                    </View>
                    <View style={styles.tierTitleContainer}>
                        <SvgIcon type={tierStep>=0?"tierActive":"tierInactive"} />
                        <Text style={tierStep==0?styles.tierTitle:styles.tierTitleGray}>Basic Necessities</Text>
                    </View>
                    <Text style={styles.tierDescription}>{tierDescriptions[0]}</Text>
                    <View style={styles.tierTitleContainer}>
                        <SvgIcon type={tierStep>=1?"tierActive":"tierInactive"} />
                        <Text style={tierStep==1?styles.tierTitle:styles.tierTitleGray}>Special Shopping Events</Text>
                    </View>
                    <Text style={styles.tierDescription}>{tierDescriptions[1]}</Text>
                    <View style={styles.tierTitleContainer}>
                        <SvgIcon type={tierStep>=2?"tierActive":"tierInactive"} />
                        <Text style={tierStep==2?styles.tierTitle:styles.tierTitleGray}>Frontline for Tier 1 Offerings</Text>
                    </View>
                    {/* <Text style={styles.tierDescription}>{tierDescriptions[2]}</Text> */}
                    <View style={styles.tierOptionsContainer}>
                        <Pressable onPress={() => setToggleExpanded(!toggleExpanded)}
                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed
                                ? 'black'
                                : '#F6F6F6'
                            },
                            styles.toggleButton
                            ]}>
                            <Text style={[globalStyles.body2Bold, {color: '#A9A9A9', marginTop: 2}]}>What Can I Get?</Text>
                            <SvgIcon type="chevron_up"></SvgIcon>
                        </Pressable>
                    </View>
                </View>
            )
        }
    }

    const dropdownToggle = () => {
        if (!dropdownExpanded) {
            return (
                <Pressable onPress={() => setDropdownExpanded(!dropdownExpanded)} style={styles.dropdownContainer}>
                    <View style={styles.addContainer}>
                        <View style={styles.stackOfSmileys}>
                            <Image style = {[styles.profileImage, {position: 'absolute', left: 0}]} source={require('../../../assets/images/parentSmiley.png')}/>
                            <Image style = {[styles.profileImage, {position: 'absolute', left: 27}]} source={require('../../../assets/images/headSmiley.png')} />
                            <Image style = {[styles.profileImage, {position: 'absolute', left: 57}]} source={require('../../../assets/images/childSmiley.png')} />
                            <Image style = {[styles.profileImage, {position: 'absolute', left: 87}]} source={require('../../../assets/images/childSmiley.png')} />
                        </View>
                        <View style={styles.innerContainer}>
                            <View style={styles.rowContainer}>
                                <Text style={[globalStyles.body1Bold,{color: "#5F5F5F"}]}>5 People</Text>
                            </View>
                            <Text style={[globalStyles.body1, {color: "#5F5F5F"}]}>Me, Jacob, Cindy, Albe...</Text>
                        </View>
                    </View>
                </Pressable>
            )
        } else {
            return (
                <View style={styles.dropdownContainer}>
                    <Pressable onPress={() => setDropdownExpanded(!dropdownExpanded)} style={styles.familyCardContainer}>
                        <View style={styles.addContainer}>
                            <View style={styles.stackOfSmileys}>
                                <Image style = {[styles.profileImage, {position: 'absolute', left: 0}]} source={require('../../../assets/images/headSmiley.png')} />
                                <Image style = {[styles.profileImage, {position: 'absolute', left: 27}]} source={require('../../../assets/images/parentSmiley.png')}/>
                                <Image style = {[styles.profileImage, {position: 'absolute', left: 57}]} source={require('../../../assets/images/childSmiley.png')} />
                                <Image style = {[styles.profileImage, {position: 'absolute', left: 87}]} source={require('../../../assets/images/childSmiley.png')} />
                            </View>
                            <View style={styles.innerContainer}>
                                <View style={styles.rowContainer}>
                                    <Text style={[globalStyles.body1Bold,{color: "#5F5F5F"}]}>3 People</Text>
                                </View>
                                <Text style={[globalStyles.body1, {color: "#5F5F5F"}]}>Me, Jacob, Cindy, Albe...</Text>
                            </View>
                        </View>
                    </Pressable> 
                    {console.log("members")}
                    {
                        familyMembers.map((member) => {
                            console.log(member);
                            return (
                                <View style={styles.memberRow}>
                                    <Image style={[styles.memberIcon]} source={require('../../../assets/images/headSmiley.png')} />
                                    <Text style={styles.memberName}>{member.full_name}</Text>
                                    <Text style={styles.memberPoints}>{member.points}</Text>
                                </View>
                            )
                        })
                    }
                </View>
            )
        }
    }


    const tiersStr = []

    return (
        <View style = {styles.homeContainer}>
            <ScrollView style = {styles.contentContainer} contentContainerStyle = {styles.alignment}>

            <View style = {styles.dateContainer}>
                <Text style={[globalStyles.body2, {color: '#525454'}]}>{getCurrentDate()}</Text>
            </View>
            <View style = {styles.headline}>
                <Text style={[globalStyles.h3Bold, {color: '#272929'}]}>{familyName} Family</Text>
                <View style={styles.innerContainer}>
                    <Pressable
                        onPress={()=>navigation.navigate('Profile')}
                    >
                    <View style={styles.addPersonalCircle}>
                        <Text style={[styles.initialText, {color: '#253C85'}]}>{userInitial}</Text>
                    </View>
                    </Pressable>
                </View>
            </View>

            {dropdownToggle()}

            <View style={styles.familyBalanceCardContainer}>
                <View style={styles.topHalfContainer}>
                    <View style = {styles.balanceContainer}>
                        <Text style={[styles.balanceText, {color: "#253C85"}]}>{familyBalance}</Text>
                        <Text style={globalStyles.overline2}>FAMILY BALANCE</Text>
                    </View>
                        <Pressable onPress={() => refRBSheet.current.open()}
                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed
                                ? 'white'
                                : '#E6ECFE'
                            },
                            styles.contributions
                            ]}>
                            <Text style={[globalStyles.body2Bold, {color: "#5F5F5F"}]}>Learn More</Text>
                        </Pressable>
                </View>

                <View style={styles.progressBar}>
                    <StepIndicator 
                    stepCount = {3}
                    customStyles={customStyles}
                    currentPosition={tierStep}
                    labels={labels}
                    />
                </View>

                {tierToggle()}
            </View>
            
            <View style={styles.tranxContainer}>

                <View style = {styles.tranxbar}>
                    <Text style={[globalStyles.overline1]}>FAMILY TRANSACTIONS</Text>
                </View>

                <TransactionsGroup forFamily = {true}>
                </TransactionsGroup>

            </View>
            </ScrollView>
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={761}
                customStyles={{
                    container: {
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                    }
                }}
            >
                <LearnMoreModal refRBSheet={refRBSheet}/>
            </RBSheet>
        </View>
        
    );
}

export default FamilyScreen;